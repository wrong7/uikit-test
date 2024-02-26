import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto-flex)"],
      },
      boxShadow: {
        "inset-1": "inset 0 0 0 1px",
        "inset-2": "inset 0 0 0 2px",
      },
      screens: {
        "3xl": "1950px",
      },
      zIndex: {
        overlay: "100000000000",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          to: {
            visibility: "hidden",
          },
        },
        typing: {
          "0%": {
            borderColor: "rgba(59,130,246,1)",
          },
          "50%": {
            borderColor: "rgba(59,130,246,0.4)",
          },
          "100%": {
            borderColor: "rgba(59,130,246,1)",
          },
        },
        target: {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(255, 255, 0, 1)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 60px rgba(255, 255, 0, 0)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s steps(2, start) infinite",
        typing: "typing 0.9s steps(20) infinite alternate",
        target: "target 2s infinite alternate",
        pop: "pop 0.6s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-react-aria-components"),
  ],
};

module.exports = tailwindConfig;
