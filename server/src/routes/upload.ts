import { handleFileUpload } from "@/controllers/upload";
import { Hono } from "hono";

const app = new Hono();

app.post("/upload", handleFileUpload);

export default app;
