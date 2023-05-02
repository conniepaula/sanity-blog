/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EC9AF9",
          100: "#EB95F8",
          200: "#EA91F8",
          300: "#E887F7",
          400: "#E781F7",
          500: "#DF52F4",
          600: "#D522F1",
          700: "#B90DD3",
          800: "#930BA8",
          900: "#690878",
          950: "#540660",
        },
        gradients: {
          "image-mask": "var(--mask-image-gradient)",
        },
      },
      backgroundImage: {
        "border-gradient": "linear-gradient(0deg, transparent 1%, #27272a)",
        "border-gradient-test": "linear-gradient(0deg, pink 1%, lightblue)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
