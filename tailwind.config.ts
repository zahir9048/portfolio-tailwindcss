import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f0f0",
        myPink : "#F98585",
        myBlack: "#21243D",
        footerBackground: "#FAF5F5",
        recentBackground: "#F4E2E2",
        foreground: "var(--foreground)",
        heroElispe: "#dfd8d8",
      },
    },
  },
  plugins: [],
};
export default config;
