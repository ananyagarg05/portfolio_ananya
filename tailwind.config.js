/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables dark mode using a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], // Paths to scan for Tailwind CSS classes
  theme: {
    container: {
      center: true,
      padding: "15px", // Adds padding to the container
    },
    screens: {
      sm: "640px", // Small screen breakpoint
      md: "768px", // Medium screen breakpoint
      lg: "960px", // Large screen breakpoint
      xl: "1200px", // Extra large screen breakpoint
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Custom font using a CSS variable
    },
    extend: {
      colors: {
        primary: "#1c1c22", // Custom primary color
        accent: {
          DEFAULT: "#00ff99", // Default accent color
          hover: "#00e187", // Accent color on hover
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Large border radius
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Adds the tailwindcss-animate plugin
};
