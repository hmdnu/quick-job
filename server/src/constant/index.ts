export enum userValidationMessage {
  USER_NOT_FOUND = "User tidak ditemukan",
  PASSWORD_INVALID = "Password salah",
  FIRSTNAME_REQUIRED = "Nama depan diperlukan",
  LASTNAME_REQUIRED = "Nama belakang diperlukan",
  EMAIL_REQUIRED = "Email diperlukan",
  EMAIL_NOT_VALID = "Harus berupa email yang valid",
  USERNAME_REQUIRED = "Nama pengguna diperlukan",
  USERNAME_MAX_CAP = "Jumlah karakter maksimum adalah 191",
  USERNAME_MIN_CAP = "Jumlah karakter minimum adalah 2",
  PASSWORD_REQUIRED = "Kata sandi diperlukan",
  PASSWORD_MAX_CAP = "Jumlah karakter maksimum adalah 191",
  PASSWORD_MIN_CAP = "Kata sandi minimal 8 karakter",
  PASSWORD_REGEX_NOT_VALID = "Kata sandi harus mengandung setidaknya satu digit, satu huruf besar, dan satu huruf kecil",
  DUPLICATE = /* err */ "sudah diambil",
}

export enum postValidationMessage {
  TITLE_REQUIRED = "Title is required",
  DEADLINE_REQUIRED = "Deadline is required",
  PRICE_REQUIRED = "Price is required",
  PAYMENT_REQUIRED = "Payment is required",
}

export enum STATUS {
  ONGOING = "ONGOING",
  DONE = "DONE",
  CANCELED = "CANCELED",
  IDLE = "IDLE",
}

export enum PAYMENT {
  CASH = "CASH",
  TRANSFER = "TRANSFER",
}
