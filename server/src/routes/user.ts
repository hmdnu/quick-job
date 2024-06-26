import { Hono } from "hono";
import { handleGetUser, handleGetUsers, handleLogin, handleRegister } from "@/controllers/user";
import { validatorHandler } from "@/middlewares/validation";
import { validator } from "hono/validator";

const app = new Hono();

app.get("/:userId", handleGetUser); // get single user
app.post("/login", validator("json", validatorHandler), handleLogin); // handle login
app.post("/register", validator("json", validatorHandler), handleRegister); // handle register
app.get("/", handleGetUsers);

export default app;
