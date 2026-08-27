import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        charcoal: "#17171A",
        charcoal2: "#212124",
        ivory: "#F6F2E9",
        gold: "#C9962E",
        "gold-light": "#E9C468",
        "gold-dim": "#8C6118",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
