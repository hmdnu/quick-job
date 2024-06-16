import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email wajib diisi" }).email(),
  password: z.string().min(1, { message: "Kata sandi wajib diisi" }),
});

export const registerSchema = z.object({
  firstname: z.string().min(1, { message: "Nama Awal wajib diisi" }),
  lastname: z.string().min(1, { message: "Nama Akhir wajib diisi" }),
  email: z
    .string()
    .email({ message: "Harus berupa email" })
    .min(1, { message: "Email wajib diisi" }),
  username: z.string().min(1, { message: "Username wajib diisi" }),
  password: z.string().min(8, { message: "Kata sandi minimal 8 karakter" }),
});
