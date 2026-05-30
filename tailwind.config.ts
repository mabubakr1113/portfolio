import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#ECE6D4",
        "paper-2": "#E2DCC8",
        ink: "#0E0E0C",
        "ink-2": "#2A2A26",
        muted: "#6C6A60",
        line: "#D2CBB7",
        accent: "#FF4D14",
        "accent-2": "#1638FF",
      },
    },
  },
  plugins: [],
};
export default config;
