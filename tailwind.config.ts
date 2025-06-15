import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          bg: "#0F0D1A",
          secondary: "#1A1625",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          primary: "#FF2EC5",
          hover: "#29FFE3",
          soft: "#A686D1",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom ModeAI colors with darker indigo theme
        "primary-bg": "#0F0D1A",
        "primary-secondary": "#1A1625",
        "text-primary": "#F8F9FA",
        "text-muted": "#9CA3AF",
        "border-gray": "#2D2A3E",
        "indigo-light": "#1F1C2E",
        "indigo-dark": "#0F0D1A",
        "crimson-dark": "#800000",
        // Soft Pastel Colors
        "soft-red": "#C76666",
        "soft-orange": "#DFA361",
        "soft-yellow": "#E6DE6F",
        "soft-green": "#84CC8E",
        "soft-cyan": "#6EC8C8",
        "soft-blue": "#7F9EEB",
        "soft-purple": "#A686D1",
        // Bright Interaction Colors
        "neon-pink": "#FF2EC5",
        "bright-aqua": "#29FFE3",
        "bright-yellow": "#FFFF3B",
        "vivid-green": "#2EFF71",
        "vivid-blue": "#3B9EFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FF2EC5 0%, #29FFE3 100%)",
        "gradient-soft": "linear-gradient(135deg, #A686D1 0%, #7F9EEB 100%)",
        "gradient-warm": "linear-gradient(135deg, #DFA361 0%, #C76666 100%)",
        "gradient-crimson": "linear-gradient(135deg, #800000 0%, #A00000 100%)",
        "gradient-indigo": "linear-gradient(135deg, #0F0D1A 0%, #1A1625 50%, #0F0D1A 100%)",
        "gradient-indigo-light": "linear-gradient(135deg, #1A1625 0%, #1F1C2E 100%)",
      },
      boxShadow: {
        "primary-glow": "0 0 20px rgba(255, 46, 197, 0.25)",
        "aqua-glow": "0 0 20px rgba(41, 255, 227, 0.25)",
        "card-glow": "0 8px 32px rgba(255, 46, 197, 0.15)",
        "indigo-glow": "0 4px 20px rgba(15, 13, 26, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "indigo-card": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "blur-in": "blurIn 0.8s ease-out forwards",
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
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blurIn: {
          "0%": { filter: "blur(10px)", opacity: "0", transform: "translateY(20px)" },
          "100%": { filter: "blur(0px)", opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      // Add glass effect utilities
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-dark": "rgba(0, 0, 0, 0.1)",
        "glass-light": "rgba(255, 255, 255, 0.1)",
        "glass-purple": "rgba(166, 134, 209, 0.1)",
        "glass-pink": "rgba(255, 46, 197, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
