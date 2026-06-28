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
        "ink": "#161616", // Headings & primary text
        "slate": "#4B4B4B", // Body text
        "cloud": "#F7F6F3", // Light section bg
        "gold": "#C9A24B", // Gold accents
        "cream": "#F3E9DC", // Soft cream alternate bg
        
        // Next.js CSS variable fallbacks
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["var(--font-headings)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        // Card and pill configurations
        card: "1rem", // 16px equivalent to rounded-2xl
        pill: "9999px", // rounded-full
      },
      boxShadow: {
        // Soft, layered professional shadows
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        lift: "0 20px 40px -15px rgba(207, 32, 48, 0.08), 0 0 1px rgba(207, 32, 48, 0.1)",
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
