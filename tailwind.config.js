/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(26, 115, 232, 1)",
        "primary-light": "rgba(26, 115, 232, 0.11)",
        "text-primary": "rgba(26, 32, 44, 1)",
        "table-head-blue": "rgba(19, 80, 160, 1)",
        "footer-bg": "rgba(40, 40, 40, 1)",
      },
    },
  },
  plugins: [],
};
