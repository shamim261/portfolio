import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          100: "#233554",
          200: "#112240",
          300: "#0a192f",
        },
        slate: {
          100: "#ccd6f6",
          200: "#a8b2d1",
          300: "#8892b0",
        },
        green: "#64ffda",
      },
    },
  },
  plugins: [],
} satisfies Config;
