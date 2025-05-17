import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-itim)"],
      itim: ["var(--font-itim)"],
      pixelify: ["var(--font-pixelify-sans)"],
    },
    extend: {},
  },
  plugins: [],
};
export default config; 