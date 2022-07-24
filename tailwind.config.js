module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "340px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        light: "#F3F3F7",
        bgDarkest: "#2a2e38",
        bgDarker: "#2F343F",
        bgDark: "#383C4A",
        bgSemiDark: "#404552",
        borderDark: "#252a32",
        light: "#D3DAE3",
        grayed: "#858A96",
        accent: "#5090DC",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
  variants: {
    extend: {
      border: ["first"],
    },
  },
};
