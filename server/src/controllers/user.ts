import { Context } from "hono";
import { User } from "types";
import { prisma } from "@/helpers/db";
import { StatusCodes as http } from "http-status-codes";
import { v4 as uuid } from "uuid";
import { handleHash, handleVerify } from "@/helpers/hash";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { createToken } from "@/libs/jwt";

export async function handleLogin(c: Context) {
  const userData: User = await c.req.json();

  try {
    // get user
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: userData.email,
      },
    });

    // verify password
    const verifiedPass = await handleVerify(userData.password, user?.password);

    // auth
    // to check if user undefined
    if (!user) {
      return c.json({ message: "email not found" }, http.NOT_FOUND);
    }

    if (!verifiedPass) {
      return c.json({ message: "Password invalid" }, http.UNAUTHORIZED);
    }

    const token = await createToken({ id: user?.id, email: user?.email, username: user?.username });

    return c.json({ user, access_token: token });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function handleRegister(c: Context) {
  const userData: User = await c.req.json();

  // hash password
  const hashedPassword = await handleHash(userData.password);

  try {
    // make new user
    const newUser = await prisma.user.create({
      data: {
        id: uuid(),
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
      },
    });

    return c.json(newUser, http.CREATED);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          const errMsg = (error.meta?.target as string).split("_")[1];
          return c.json({ message: `duplicate ${errMsg}` }, http.BAD_REQUEST);

        default:
          return c.json({ message: "internal server error" }, http.INTERNAL_SERVER_ERROR);
      }
    }
  }
}

export async function handleGetUser(c: Context) {
  const userId = c.req.param("userId");

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      include: {
        posts: true,
        job: true,
      },
    });

    return c.json(user, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return c.json({ message: error.message }, http.NOT_FOUND);
      }

      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}
