import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter), sans-serif",
        "roboto-slab": "var(--font-roboto-slab), serif",
      },
    },
  },
  plugins: [],
};

export default config;
