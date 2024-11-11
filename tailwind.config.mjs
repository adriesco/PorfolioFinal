export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "theme-light:text-black",
    "theme-light:bg-white",
    "theme-light:border-gray-300", // Agrega más estilos según sea necesario
  ],
};
