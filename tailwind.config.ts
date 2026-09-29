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
        background: "#F7F7F5",
        surface: "#FFFFFF",
        border: "#E7E7E5",
        brand: {
          50: "#F9F9F8",
          100: "#F0F0EE",
          200: "#E3E3E0",
          300: "#CECEC9",
          400: "#A3A39C",
          500: "#73736C",
          600: "#52524D",
          700: "#363632",
          800: "#21211F",
          900: "#111111",
          950: "#090909",
        },
        primary: "#111111",
        secondary: "#737373",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
      },
      borderRadius: {
        'crm': '12px',
        'crm-lg': '14px',
        'crm-sm': '8px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'drawer': '-4px 0 24px -2px rgba(0, 0, 0, 0.08)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
