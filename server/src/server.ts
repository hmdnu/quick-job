import { Hono } from "hono";
import handleCors from "@/middlewares/cors";

// routes
import userRoutes from "@/routes/user";
import postRoutes from "@/routes/post";
import jobRoutes from "@/routes/job";
import uploadRoutes from "@/routes/upload";

const app = new Hono();

app.use("/api/*", handleCors());

app.route("/api/user", userRoutes);
app.route("/api/post", postRoutes);
app.route("/api/job", jobRoutes);
app.route("/api/upload", uploadRoutes);

export default {
  port: Bun.env.PORT || 3000,
  fetch: app.fetch,
};
