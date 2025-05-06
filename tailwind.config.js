// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': "#bec79e",
        "primary-light": "#e8ebdc",
        "primary-dark": "#637040",
        'secondary': "#A388ED",
        "secondary-light": "#e0dafa",
        "secondary-dark": "#834cdb",
        'neutral': "#1f2937",
      },
    },
  },
  plugins: [],
};
