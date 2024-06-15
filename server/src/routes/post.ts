import { Hono } from "hono";
import {
  handleCreatePost,
  handleDeletePost,
  handleGetPost,
  handleGetPosts,
  hanldeUpdatStatusPost,
} from "@/controllers/post";
import { validatorHandler } from "@/middlewares/validation";
import { validator } from "hono/validator";

const app = new Hono();

app.get("/", handleGetPosts); // get all posts
app.get("/:postId", handleGetPost); // get single post
app.post("/new", validator("json", validatorHandler), handleCreatePost); // create new post
app.delete("/:postId", handleDeletePost); // delete single post
app.patch("/:postId", hanldeUpdatStatusPost); // update single post

export default app;
