import { AuthValidator, PostValidator, QueryValidator, UserValidator } from "@/libs/zod";
import { StatusCodes as http } from "http-status-codes";
import { Context } from "hono";

const pathToValidate = {
  "/user/register": UserValidator,
  "/user/login": AuthValidator,
  "/post/new": PostValidator,
};

export function validatorHandler(value: any, c: Context) {
  const path = c.req.url;

  const matchValidatorEntry = Object.entries(pathToValidate).find(([key]) => path.includes(key));

  if (!matchValidatorEntry) {
    return c.json({ message: "invalid path" }, http.BAD_REQUEST);
  }

  const [_, validator] = matchValidatorEntry;

  const parsed = validator.safeParse(value);

  if (!parsed.success) {
    return c.json({ message: parsed.error }, http.UNAUTHORIZED);
  }

  return parsed.data;
}

export function validatorQueryHandler(value: any, c: Context) {
  const parsed = QueryValidator.safeParse(value);

  if (!parsed.success) {
    return c.json({ message: parsed.error }, http.UNAUTHORIZED);
  }

  return parsed.data;
}
