import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A2E4D",
          deep: "#071E33",
          light: "#134074",
          accent: "#FF6F4A",
          "accent-hover": "#E85A35",
        },
        ocean: {
          50: "#E6F0FA",
          100: "#C0D9F0",
          200: "#96BCE4",
          300: "#6B9FD8",
          400: "#4B88CF",
          500: "#0A2E4D",
          600: "#082641",
          700: "#061E34",
          800: "#041628",
          900: "#020E1B",
        },
        coral: {
          50: "#FFF0EC",
          100: "#FFD6CC",
          200: "#FFB8A8",
          300: "#FF9A84",
          400: "#FF836A",
          500: "#FF6F4A",
          600: "#E85A35",
          700: "#CC4825",
          800: "#A63818",
          900: "#80290E",
        },
        sand: {
          50: "#FDFBF9",
          100: "#F9F5F0",
          200: "#F2E9E0",
          300: "#E8D9CC",
          400: "#D4C0A8",
          500: "#C0A888",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(10,46,77,0.08)",
        "soft-lg": "0 30px 60px rgba(10,46,77,0.12)",
        "soft-xl": "0 40px 80px rgba(10,46,77,0.16)",
        glow: "0 0 40px rgba(255,111,74,0.3)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0A2E4D 0%, #134074 50%, #1A5A9E 100%)",
        "gradient-coral": "linear-gradient(135deg, #FF6F4A 0%, #FF9A84 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(10,46,77,0.8) 0%, rgba(10,46,77,0.4) 50%, rgba(10,46,77,0.9) 100%)",
        "gradient-card": "linear-gradient(180deg, transparent 0%, rgba(10,46,77,0.85) 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,111,74,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(255,111,74,0.5)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
