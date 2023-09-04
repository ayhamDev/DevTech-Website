/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        lg: "1120px",
      },
      borderRadius: {
        main: "24px",
      },
      textColor: {
        black: "rgb(var(--secondary),var(--tw-text-opacity))",
        primary: "rgb(var(--primary),var(--tw-text-opacity))",
        white: "rgb(var(--white),var(--tw-text-opacity))",
      },
      backgroundColor: {
        black: "rgb(var(--secondary),var(--tw-bg-opacity))",
        primary: "rgb(var(--primary),var(--tw-bg-opacity))",
        white: "rgb(var(--white),var(--tw-bg-opacity))",
      },
      fontFamily: {
        main: "Quicksand",
      },
    },
  },
  plugins: [],
};
