import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        "500": "500px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      variants: {
        extend: {
          transform: ["hover"],
        },
      },
      colors: {
        primary: "#000000", //Black
        secondary: "#FFFF", //White
        tertiary: "#348827", //Green
        quaternary: "#273171", //Dark Purple
      },
    },
  },
  plugins: [],
};
export default config;
