/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".public/index.ts",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#3C3744",
        yellow: "#EECB55",
        pink: "#FB5D64",
        cell: "#46DBC9",
        goku: "#F5F5F5",
        gohan: "#FFFFFF",
        bulma: "#0C0B0B",
        trunks: "#595D62",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      backgroundImage: {
        navbar: "url('/img/bg-navbar.png')",
      },
    },
  },
  plugins: [],
};
