/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
      },
      lineHeight: {
        tree: "30px",
      },
      colors: {
        "primary-focus": "#155E75",
        "primary-content": "#ECFEFF",
        "secondary-focus": "#047857",
        "secondary-content": "#ECFDF5",
        "accent-focus": "#D97706",
        "accent-content": "#78350F",
        "neutral-focus": "#1F2937",
        "neutral-content": "#F9FAFB",
        "base-10": "#F3F4F6",
        "base-200": "#E5E7EB",
        "base-300": "#D1D5DB",
        "base-400": "#9CA3AF",
        "info-content": "#1E3A8A",
        "success-content": "#14532D",
        "warning-content": "#713F12",
        "danger-content": "#7F1D1D",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        manutheme: {
          primary: "#0891B2",
          secondary: "#10B981",
          accent: "#FBBF24",
          neutral: "#374151",
          "base-100": "#F9FAFB",
          "base-content": "#1F2937",
          info: "#BFDBFE",
          success: "#BBF7D0",
          warning: "#FEF9C3",
          error: "#FECACA",
        },
      },
    ],
  },
  plugins: [daisyui],
};

