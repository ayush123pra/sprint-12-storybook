import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Yahi wo line hai jo dark mode enable karegi!
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;