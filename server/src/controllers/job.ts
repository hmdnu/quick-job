import { prisma } from "@/helpers/db";
import { Context } from "hono";
import { v4 as uuid } from "uuid";
import { StatusCodes as http } from "http-status-codes";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function handleCreateJob(c: Context) {
  const postId = c.req.query("postId");
  const clientId = c.req.query("clientId");
  const { jobTitle } = await c.req.json();

  try {
    const post = await prisma.job.create({
      data: {
        id: uuid(),
        jobTitle,
        client: {
          connect: {
            id: clientId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
      },
      include: {
        client: true,
        post: true,
      },
    });

    return c.json(post, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function handleUpdateJobStatus(c: Context) {
  const { jobId } = c.req.query();
  const jobData = await c.req.json();

  try {
    const job = await prisma.job.update({
      where: {
        id: jobId,
      },
      data: {
        isDone: jobData.isDone,
      },
    });

    return c.json({ job, message: "job updated" }, http.OK);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return c.json({ message: error.message }, http.INTERNAL_SERVER_ERROR);
    }
  }
}
