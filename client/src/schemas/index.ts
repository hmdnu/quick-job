import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  firstname: z.string().min(1, { message: "Firstname is required" }),
  lastname: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().email({ message: "Must be an email" }).min(1, { message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(8, { message: "Minimum password is 8 characters" }),
});
