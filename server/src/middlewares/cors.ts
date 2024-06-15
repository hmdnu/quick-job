import { cors } from "hono/cors";

export default function handleCors() {
  return cors({
    origin: "*",
    allowMethods: ["POST", "GET", "DELETE", "PATCH"],
  });
}
