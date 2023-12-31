/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors: {
        "brand-primary": "#7367F0",
      },
    },
  },

  plugins: [],
};
