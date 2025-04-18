import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        none: "none",
        "200": "200px",
        "100": "100px",
        "300": "2000px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        bounceColor: {
          "0%": {
            transform: "translateY(-10px)",
            color: "#ffffff70",
          }, // white
          "100%": { transform: "translateY(0px)", color: "#fff" }, // black
        },
        bounceLeft: {
          "0%": {
            opacity: "0",
          }, // white
          "100%": { opacity: "1" }, // black
        },
        draw: {
          "0%": {
            strokeDashoffset: "4500",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
      },
      animation: {
        bounceColor: "bounceColor 1s infinite",
        draw: "draw 10s ease",
        infiniteDraw: "draw 10s ease infinite",
        bounceLeft: "bounceLeft 1s infinite",
      },
      boxShadow: {
        white: "0 -5px 10px #fff",
      },
      fontFamily: {
        nautx: ["nautx-regular", "sans-serif"],
        tenor: "Tenor Sans",
        dancing: "Dancing Script",
        michroma: "Michroma",
      },
      textShadow: {
        whitel: "1px 1px 2px #fff",
      },
      backgroundImage: {
        blackcube: "radial-gradient(#51515175,#000000c1)",
        gta: "radial-gradient()",
        legendx: "radial-gradient(#15151d1d,#181823c3)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1300px",
    },
  },
  plugins: [
    function ({
      addUtilities,
      theme,
    }: {
      addUtilities: (utilities: any) => void;
      theme: any;
    }) {
      const perspectives = theme("perspective");
      const newUtilities = Object.entries(perspectives).map(([key, value]) => {
        return {
          [`.perspective-${key}`]: {
            perspective: value,
          },
        };
      });
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
