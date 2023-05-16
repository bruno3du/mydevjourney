import { fontFamily, colors } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      orange: "#B67131",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#232323",
        850: "#191919",
        900: "#1a202c",
      },
      ...colors,
    },
    fontFamily: {
      heading: ["var(--karma-font)", ...fontFamily.sans],
      body: ["Roboto", ...fontFamily.serif],
    },
  },
  plugins: [],
} satisfies Config;
