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
        // Brand color tokens
        "brand-red": "#CF2030", // Primary red
        "brand-red-dark": "#A8161F", // Hover red
        "brand-maroon": "#7A0D14", // Deep red accents
        "ink": "#0E0E0E", // Near-black for dramatic dark sections
        "slate": "#4B4B4B", // Body text
        "cloud": "#F7F6F3", // Light section bg
        "gold": "#C9A24B", // Gold accents
        "cream": "#F3E9DC", // Soft cream alternate bg
        "paper": "#FAF8F5", // Warm off-white base
        "line": "rgba(0, 0, 0, 0.08)", // Hairline grid/border color
        
        // Next.js CSS variable fallbacks
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Fluid typography scale
        "display-xl": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "eyebrow": ["0.75rem", { letterSpacing: "0.25em" }],
      },
      borderRadius: {
        // Card and pill configurations
        card: "1.25rem", // Generous 1.25rem radius
        pill: "9999px", // rounded-full
      },
      boxShadow: {
        // Soft, layered professional shadows
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        lift: "0 20px 40px -15px rgba(207, 32, 48, 0.08), 0 0 1px rgba(207, 32, 48, 0.1)",
        // New shadow design tokens
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        float: "0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.04)",
        "glow-red": "0 0 20px rgba(207, 32, 48, 0.15), 0 0 1px rgba(207, 32, 48, 0.3)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px", // max content container is ~1200px
        },
      },
    },
  },
  plugins: [],
};
export default config;
