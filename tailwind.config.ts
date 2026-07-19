import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        paper: "#FAFAF7",
        card: "#F2F1EC",
        border: "rgba(17,17,19,.1)",
        borderDark: "rgba(255,255,255,.12)",
        text: {
          primary: "#111113",
          secondary: "#6B6B6F",
          onDark: "#FAFAF7",
          onDarkSecondary: "#9C9C9F",
        },
        accent: {
          DEFAULT: "#E08D4B",
          soft: "#F4C9A0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-archivo)", "sans-serif"],
      },
      maxWidth: {
        prose: "700px",
      },
      letterSpacing: {
        tight2: "-0.02em",
        tight3: "-0.03em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
