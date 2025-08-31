import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FDE8EB', // ljusrosa bakgrund
          500: '#E28CA6', // dov rosa (rubriker)
          700: '#B35F74', // mörkare rosa
        },
        secondary: {
          100: '#E6F4E3', // ljusgrön bakgrund
          500: '#8BC17F', // grönt accent
          700: '#5F9A5B', // mörkare grön
        },
        accent: {
          100: '#FFF5E6', // ljus aprikos/guld
          500: '#F2B87F', // varm accent
          700: '#D9954F', // mörkare accent
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
