/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": {
          DEFAULT: "#010026",
          50: "#0A1F7A",
          100: "#091B6B",
          200: "#07155C",
          300: "#060F4D",
          400: "#040A3E",
          500: "#010026",
          600: "#000022",
          700: "#00001D",
          800: "#000019",
          900: "#000014"
        },
        blue: {
          DEFAULT: "#2CBCE9",
          50: "#D7F2FB",
          100: "#C4ECF9",
          200: "#9EE0F5",
          300: "#77D4F1",
          400: "#51C8ED",
          500: "#2CBCE9",
          600: "#1699C6",
          700: "#127594",
          800: "#0D5162",
          900: "#092D30"
        },
        red: {
          DEFAULT: "#DC4492",
          50: "#F9E0ED",
          100: "#F6D0E5",
          200: "#F0B1D6",
          300: "#EA92C7",
          400: "#E373B8",
          500: "#DC4492",
          600: "#C42875",
          700: "#952058",
          800: "#66163C",
          900: "#370D20"
        },
        yellow: {
          DEFAULT: "#FDCC49",
          50: "#FFF9E6",
          100: "#FEF4CC",
          200: "#FEE899",
          300: "#FDDD66",
          400: "#FDCC49",
          500: "#FCC126",
          600: "#E7AB05",
          700: "#B58404",
          800: "#835E03",
          900: "#513902"
        },
        grey: {
          DEFAULT: "#ededed",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#F0F0F0",
          400: "#EDEDED",
          500: "#E0E0E0",
          600: "#C7C7C7",
          700: "#A3A3A3",
          800: "#757575",
          900: "#4A4A4A"
        },
        "dark-grey": {
          DEFAULT: "#757575",
          50: "#D6D6D6",
          100: "#CCCCCC",
          200: "#B8B8B8",
          300: "#A3A3A3",
          400: "#8F8F8F",
          500: "#757575",
          600: "#5C5C5C",
          700: "#424242",
          800: "#292929",
          900: "#0F0F0F"
        },
        "opaque-black": {
          DEFAULT: "rgba(0,0,0,0.35)",
          50: "rgba(0,0,0,0.05)",
          100: "rgba(0,0,0,0.1)",
          200: "rgba(0,0,0,0.2)",
          300: "rgba(0,0,0,0.3)",
          400: "rgba(0,0,0,0.35)",
          500: "rgba(0,0,0,0.4)",
          600: "rgba(0,0,0,0.5)",
          700: "rgba(0,0,0,0.6)",
          800: "rgba(0,0,0,0.7)",
          900: "rgba(0,0,0,0.8)"
        },
        white: {
          DEFAULT: "#FFFFFF",
          5: "rgba(255, 255, 255, 0.05)",
          10: "rgba(255, 255, 255, 0.1)",
          20: "rgba(255, 255, 255, 0.2)",
          30: "rgba(255, 255, 255, 0.3)",
          40: "rgba(255, 255, 255, 0.4)",
          50: "rgba(255, 255, 255, 0.5)",
          60: "rgba(255, 255, 255, 0.6)",
          70: "rgba(255, 255, 255, 0.7)",
          80: "rgba(255, 255, 255, 0.8)",
          90: "rgba(255, 255, 255, 0.9)"
        }
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        outfit: ['Outfit', 'sans-serif']
      },
      content: {
        brush: "url('/brush.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
