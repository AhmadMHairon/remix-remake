/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#E3E3E3",
          200: "#C8C8C8",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#121212",
        },
        aqua: {
          brand: "#3DEFE9",
          900: "#104D51",
        },
        green: {
          brand: "#6BD968",
        },
        yellow: {
          brand: "#FECC1B",
        },
        blue: {
          brand: "#3992FF",
        },
        red: {
          brand: "#F44250",
        },
        pink: {
          brand: "#D83BD2",
        },
        code: {
          purple: "#d83bd2",
          blue: "#3992ff",
          lightblue: "#8ecdff",
          yellow: "#fecc1b",
          green: "#6bd968",
          gray: "#a4a4a4",
          lightgray: "#c8c8c8",
        },
      },
    },
  },
  plugins: [],
};
