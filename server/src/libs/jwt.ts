import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

interface Payload {
  id: string;
  email: string;
  username: string;
}

export async function createToken({ id, email, username }: Payload) {
  const payload: JWTPayload = {
    id,
    email,
    username,
    exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24,
  };

  return sign(payload, Bun.env.SECRET_TOKEN!);
}

export async function verify() {}
