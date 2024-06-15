import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Context } from "hono";
import { Post } from "types";
import { StatusCodes as http } from "http-status-codes";
import { prisma } from "@/helpers/db";
import { v4 as uuid } from "uuid";

export async function handleCreatePost(c: Context) {
  const postData: Post = await c.req.json();

  try {
    const newPost = await prisma.post.create({
      data: {
        id: uuid(),
        title: postData.title,
        desc: postData.desc,
        deadline: postData.deadline,
        payment: postData.payment as any,
        price: postData.price,
        creator: {
          connect: {
            id: postData.creatorId,
          },
        },
      },
      include: {
        creator: true,
      },
    });

    return c.json(newPost, http.CREATED);
  } catch (error) {
    console.log(error);
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: "internal server error" }, http.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function handleGetPosts(c: Context) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        creator: true,
      },
    });

    if (posts.length === 0) {
      return c.json({ message: "Empty" }, http.NO_CONTENT);
    }

    return c.json(posts, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function handleGetPost(c: Context) {
  const postId = c.req.param("postId");

  try {
    const post = await prisma.post.findUniqueOrThrow({
      where: {
        id: postId,
      },
      include: {
        creator: true,
      },
    });

    return c.json(post, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return c.json({ message: error.message }, http.NOT_FOUND);
      }

      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function hanldeUpdatStatusPost(c: Context) {
  const postData: Post = await c.req.json();
  const postId = c.req.param("postId");

  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        status: postData.status as any,
      },
    });

    return c.json({ post, message: "post updated" }, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }

    console.log(error);
    return c.json({ message: error }, http.INTERNAL_SERVER_ERROR);
  }
}

export async function handleDeletePost(c: Context) {
  const postId = c.req.param("postId");

  try {
    const post = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return c.json({ post, message: "post deleted" }, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}
