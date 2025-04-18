/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      backgroundColor: {
        "custom-blue": "rgb(13 18 28 / var(--tw-bg-opacity))", // Your custom blue color
        "hover-col": "#e8e1e10f",
        "light-hover": "#00000012",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
