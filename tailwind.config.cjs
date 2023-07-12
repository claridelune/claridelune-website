/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
        colors: {
            synthwave: {
                'background': '#2a2139',
                'primary': '#f8f8ff',
                'secondary': '#5535a2',
                'blue': '#2a3865',
            },
        },
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
};
