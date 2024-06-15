import { handleCreateJob, handleUpdateJobStatus } from "@/controllers/job";
import { validatorQueryHandler } from "@/middlewares/validation";
import { Hono } from "hono";
import { validator } from "hono/validator";

const app = new Hono();

app.post("/new", validator("query", validatorQueryHandler), handleCreateJob);
app.patch("/:jobId", handleUpdateJobStatus);

export default app;
