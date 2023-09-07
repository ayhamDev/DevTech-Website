/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        main: ` 0px 2.24148px 3.21002px 0px rgba(0, 0, 0, 0.01), 0px 5.38658px 7.71412px 0px rgba(0, 0, 0, 0.02), 0px 10.14246px 14.525px 0px rgba(0, 0, 0, 0.03), 0px 18.09241px 25.91012px 0px rgba(0, 0, 0, 0.03), 0px 33.83986px 48.46203px 0px rgba(0, 0, 0, 0.04), 0px 81px 116px 0px rgba(0, 0, 0, 0.05);
        `,
      },
      screens: {
        lg: "1120px",
      },
      borderRadius: {
        main: "24px",
      },
      fill: {
        black: "rgb(var(--secondary),var(--tw-text-opacity))",
        primary: "rgb(var(--primary),var(--tw-text-opacity))",
        white: "rgb(var(--white),var(--tw-text-opacity))",
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
