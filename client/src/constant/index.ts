export const API_URL = import.meta.env.VITE_API_URL;

export enum errorMessage {
  USER_NOT_FOUND = "User tidak ditemukan",
  PASSWORD_INVALID = "Password salah",
  INTERNAL_SERVER_ERROR = "Ada kesalahan error sistem",
  EMAIL_REQUIRED = "Email diperlukan",
  PASSWORD_REQUIRED = "Password diperlukan",
  FIRSTNAME_REQUIRED = "Nama depan diperlukan",
  LASTNAME_REQUIRED = "Nama belakang diperlukan",
  USERNAME_REQUIRED = "Nama pengguna diperlukan",
  PASSWORD_MIN_LENGTH = "Kata sandi minimal 8 karakter",
  MUST_BE_EMAIL = "Harus berupa email",
  PASSWORD_REGEX_NOT_VALID = "Kata sandi harus mengandung setidaknya satu digit, satu huruf besar, dan satu huruf kecil",
  USERNAME_TAKEN = "Username sudah diambil",
  EMAIL_TAKEN = "Email sudah diambil",
  TITLE_REQUIRED = "Judul diperlukan",
  PRICE_REQUIRED = "Harga diperlukan",
  DEADLINE_REQUIRED = "Deadline diperlukan",
}

export enum PAYMENT {
  CASH = "Cash",
  TRANSFER = "Transfer",
}

export enum STATUS {
  ONGOING = "Sedang berjalan",
  DONE = "Selesai",
  CANCELED = "Dibatalkan",
}

export enum POST_STATUS {
  DONE = "DONE",
  ONGOING = "ONGOING",
  CANCELED = "CANCELED",
}

export const PROFILE_LINKS = [
  { href: "/riwayat", key: "riwayat", icon: "/img/time.svg", label: "Riwayat" },
  {
    href: "/",
    key: "pengaturan",
    icon: "/img/setting.svg",
    label: "Pengaturan",
  },
  {
    href: "/signin",
    key: "log-out",
    icon: "/img/log-out.svg",
    label: "Log Out",
  },
];

export const DUMMY_VACANCY = [
  {
    key: 0,
    userImg: "/img/user.jpg",
    username: "Lavina Kim",
    timestamp: "1 menit",
    sallary: "50.000",
    exp: "30 menit",
    title: "Tolong dong yg bisa jastip jajan",
    desc: "Titip belikan makaroni ngehe hehehe, kirim ke gedung AX Polinema ya ! Rincian: Level 1 nya 2 Level 2 nya 1 Level 3 nya gak level :P Kalau kurang jelas bisa tanya duluu yaa lewat chatt Mwakasiii",
    location: "Lowokwaru, Malang",
    status: "ongoing",
  },
  {
    key: 1,
    userImg: "/img/user2.jpg",
    username: "Aqweena Kim",
    timestamp: "2 menit",
    sallary: "120.000",
    exp: "15 menit",
    title: "Ada yg bisa ngajarin materi gauss ?",
    desc: "Butuh seseorang yang ngelesin gue matematika materi gauss...",
    location: "Dinoyo, Malang",
    status: "complete",
  },
];

export const TIME_BUTTON = [
  { key: 1, label: "10 Menit" },
  { key: 2, label: "20 Menit" },
  { key: 3, label: "30 Menit" },
  { key: 4, label: "45 Menit" },
  { key: 5, label: "60 menit" },
  { key: 6, label: "Sampai lowongan dihapus" },
];

export const PAYMENT_METHOD = [
  {
    label: "Tunai",
  },
  {
    label: "Transfer",
  },
];

export const DUMMY_CHAT = [
  {
    key: 1,
    userImg: "/img/profile1.jpg",
    username: "John Doe",
    timestamp: 1,
    message:
      "Hello! Thank you for reaching out. Can you please share your portfolio?",
  },
  {
    key: 2,
    userImg: "/img/profile2.jpg",
    username: "Camelia Chan",
    timestamp: 2,
    message: "Sure! Here is the link to my portfolio: [portfolio link].",
  },
  {
    key: 3,
    userImg: "/img/profile3.jpg",
    username: "Robert Dawney",
    timestamp: 5,
    message: "Thank you! Looking forward to hearing from you.",
  },
];
