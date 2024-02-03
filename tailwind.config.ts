import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardFront: "url(/bg-card-front.png)",
        cardBack: "url(/bg-card-back.png)",
        mainBg: "url(/bg-main-desktop.png)",
      },
    },
  },
  plugins: [],
};
export default config;
