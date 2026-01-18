// tailwind.config.js


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        jost: ["Jost", "sans-serif"],
        nerko: ["Nerko One", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
