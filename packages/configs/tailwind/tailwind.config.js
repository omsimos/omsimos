module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },

      colors: {
        primary: {
          100: "#00FF66",
        },
      },
    },
  },
};
