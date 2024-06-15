export enum userValidationMessage {
  FIRSTNAME_REQUIRED = "Firstname is required",
  LASTNAME_REQUIRED = "Lastname is required",
  EMAIL_REQUIRED = "Email is required",
  EMAIL_NOT_VALID = "Invalid email address",
  USERNAME_REQUIRED = "Username is required",
  USERNAME_MAX_CAP = "Max chars is 191",
  USERNAME_MIN_CAP = "Minimum chars is 2",
  PASSWORD_REQUIRED = "Password is required",
  PASSWORD_MAX_CAP = "Max chars is 191",
  PASSWORD_MIN_CAP = "Minimum chars is 8",
  PASSWORD_REGEX_NOT_VALID = "Password must contain at least one digit, one uppercase letter, and one lowercase letter.",
}

export enum postValidationMessage {
  TITLE_REQUIRED = "Title is required",
  DEADLINE_REQUIRED = "Deadline is required",
  PRICE_REQUIRED = "Price is required",
  PAYMENT_REQUIRED = "Payment is required",
}

export enum STATUS {
  ONGOING = "ongoing",
  DONE = "done",
  CANCELED = "candeled",
}

export enum PAYMENT {
  CASH = "cash",
  TRANSFER = "transfer",
}
