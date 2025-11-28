/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.7)",
          "light-heavy": "rgba(255, 255, 255, 0.9)",
          dark: "rgba(17, 24, 39, 0.7)",
          "dark-heavy": "rgba(17, 24, 39, 0.9)",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "sans-serif",
        ],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
      },

      backdropBlur: {
        xs: "2px",
        "3xl": "64px",
        "4xl": "96px",
      },

      boxShadow: {
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-hover": "0 12px 48px 0 rgba(31, 38, 135, 0.2)",

        "soft-xs": "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-sm": "0 4px 12px rgba(0, 0, 0, 0.06)",
        "soft-md": "0 8px 24px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 16px 48px rgba(0, 0, 0, 0.1)",
        "soft-xl": "0 24px 64px rgba(0, 0, 0, 0.12)",
      },

      // Border radius
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      //animations
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      // Transition timing functions
      transitionTimingFunction: {
        apple: "cubic-bezier(0.28, 0.11, 0.32, 1)",
        "apple-in": "cubic-bezier(0.7, 0, 0.84, 0)",
        "apple-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
