import { z } from "zod";
import { errorMessage } from "../constant";

export const loginSchema = z.object({
  email: z.string().min(1, { message: errorMessage.EMAIL_REQUIRED }).email({ message: errorMessage.MUST_BE_EMAIL }),
  password: z.string().min(1, { message: errorMessage.PASSWORD_REQUIRED }),
});

export const registerSchema = z.object({
  firstname: z.string().min(1, { message: errorMessage.FIRSTNAME_REQUIRED }),
  lastname: z.string().min(1, { message: errorMessage.LASTNAME_REQUIRED }),
  email: z.string().email({ message: errorMessage.MUST_BE_EMAIL }).min(1, { message: errorMessage.EMAIL_REQUIRED }),
  username: z.string().min(1, { message: errorMessage.USERNAME_REQUIRED }),
  password: z
    .string()
    .min(8, { message: errorMessage.PASSWORD_MIN_LENGTH })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/, {
      message: errorMessage.PASSWORD_REGEX_NOT_VALID,
    }),
});
