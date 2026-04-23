/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#111315",
        stone: "#f6f2eb",
        gold: "#b08a4d",
        ember: "#7f2f23",
        mist: "#d8d0c3"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 40px -24px rgba(17, 19, 21, 0.45)"
      }
    }
  },
  plugins: []
};
