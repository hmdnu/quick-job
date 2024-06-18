import { prisma } from "@/helpers/db";
import { Context } from "hono";
import { v4 as uuid } from "uuid";
import { StatusCodes as http } from "http-status-codes";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { STATUS } from "@/constant";

export async function handleCreateJob(c: Context) {
  const postId = c.req.query("postId");
  const clientId = c.req.query("clientId");

  try {
    // const post = await prisma.job.create({
    //   data: {
    //     id: uuid(),
    //     client: {
    //       connect: {
    //         id: clientId,
    //       },
    //     },
    //     post: {
    //       connect: {
    //         id: postId,
    //       },
    //     },
    //   },
    //   include: {
    //     client: true,
    //     post: true,
    //   },
    // });

    // await prisma.post.update({

    //   data : {
    //     status : STATUS.ONGOING,

    //   }

    // })

    return c.json("", http.OK);
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
