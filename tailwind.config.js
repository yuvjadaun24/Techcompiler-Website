/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "dropdown-open": "parallaxDown 0.3s ease-out forwards",
        "dropdown-close": "parallaxUp 0.3s ease-in forwards",
        // ✅ Accordion animations
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        // ✅ Updated conveyor belt animation
        "conveyor-belt": "moveConveyorBelt 15s linear infinite",
      },
      keyframes: {
        parallaxDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        parallaxUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        // ✅ Accordion keyframes
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // ✅ Updated conveyor belt keyframes
        moveConveyorBelt: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
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
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        // Scale down heading-scale classes by ~15-20%
        "2xl":  ["1.25rem",  { lineHeight: "1.75rem" }], // was 1.5rem
        "3xl":  ["1.5rem",   { lineHeight: "2rem" }],    // was 1.875rem
        "4xl":  ["1.875rem", { lineHeight: "2.25rem" }], // was 2.25rem
        "5xl":  ["2.5rem",   { lineHeight: "1.1" }],     // was 3rem
        "6xl":  ["3rem",     { lineHeight: "1.05" }],    // was 3.75rem
        "7xl":  ["3.75rem",  { lineHeight: "1" }],       // was 4.5rem
        "8xl":  ["4.5rem",   { lineHeight: "1" }],       // was 6rem
        "9xl":  ["6rem",     { lineHeight: "1" }],       // was 8rem
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
