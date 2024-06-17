import { z } from "zod";
import { postValidationMessage, userValidationMessage } from "@/constant";

export const UserValidator = z.object({
  firstname: z.string({
    required_error: userValidationMessage.FIRSTNAME_REQUIRED,
  }),
  lastname: z.string({
    required_error: userValidationMessage.LASTNAME_REQUIRED,
  }),
  email: z
    .string({
      required_error: userValidationMessage.EMAIL_REQUIRED,
    })
    .email({
      message: userValidationMessage.EMAIL_NOT_VALID,
    }),
  username: z
    .string({
      required_error: userValidationMessage.USERNAME_REQUIRED,
    })
    .max(191, userValidationMessage.USERNAME_MAX_CAP)
    .min(2, userValidationMessage.USERNAME_MIN_CAP),
  password: z
    .string({
      required_error: userValidationMessage.PASSWORD_REQUIRED,
    })
    .max(191, userValidationMessage.PASSWORD_MAX_CAP)
    .min(8, userValidationMessage.PASSWORD_MIN_CAP)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/, {
      message: userValidationMessage.PASSWORD_REGEX_NOT_VALID,
    }),
});

export const AuthValidator = z.object({
  email: z
    .string({
      required_error: userValidationMessage.EMAIL_REQUIRED,
    })
    .email({
      message: userValidationMessage.EMAIL_NOT_VALID,
    }),
  password: z.string({
    required_error: userValidationMessage.PASSWORD_REQUIRED,
  }),
});

export const PostValidator = z.object({
  title: z.string({
    required_error: postValidationMessage.TITLE_REQUIRED,
  }),
  desc: z.string().optional(),
  deadline: z
    .string({
      required_error: postValidationMessage.DEADLINE_REQUIRED,
    })
    .datetime(),
  price: z.number({
    required_error: postValidationMessage.PRICE_REQUIRED,
  }),
  payment: z.enum(["CASH", "TRANSFER"], {
    required_error: postValidationMessage.PAYMENT_REQUIRED,
  }),
  address: z.string(),
});

export const QueryValidator = z.object({
  clientId: z.string(),
  postId: z.string(),
});
