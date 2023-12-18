import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/*/*.{js,ts,jsx,tsx,mdx}",
    "./src/svg/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundColor: {
        dark: "var(--color-dark)",
        orange: "var(--color-orange)",
        text233: "var(--color-text-233)",
        text232: "var(--color-text-232)",
      },
      textColor: {
        dark: "var(--color-dark)",
        orange: "var(--color-orange)",
        text233: "var(--color-text-233)",
        text232: "var(--color-text-232)",
      },
      screens: {
        "2xl": { max: "1400px" },
        "1xl": { max: "1150px" },
        xl: { max: "1024px" },
        l: { max: "900px" },
        lg: { max: "768px" },
        md: { max: "640px" },
        sm: { max: "320px" },
        "2xl-min": { min: "1400px" },
        "1xl-min": { min: "1150px" },
        "xl-min": { min: "1024px" },
        "lg-min": { min: "768px" },
        "md-min": { min: "640px" },
        "sm-min": { min: "320px" },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;