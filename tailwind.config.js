/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        body: "url('/src/assets/bg-body.jpg')",
      },
      fontFamily: {
        form: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
