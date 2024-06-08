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
        green: {
          90: "#0D4329",
          50: "#0D4329",
          10: "#0D4329",
        },
        orange: {
          90: "#AE3905",
          50: "#AE3905",
          10: "#AE3905",
        },
        red: {
          90: "#5E1528",
          50: "#5E1528",
          10: "#5E1528",
        },
        chici: {
          90: "#FF4E64",
          50: "#FF4E64",
          10: "#FF4E64",
        },
        goku: "#F5F5F5",
        gohan: "#F1F1F1",
        bulma: "#0C0B0B",
        trunks: "#595D62",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      bg: {
        navbar: "url('/img/bg-navbar')",
      },
    },
  },
  plugins: [],
};
