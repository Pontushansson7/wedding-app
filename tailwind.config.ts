import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F4D9', // ljusgrön bakgrund
          500: '#8BC34A', // standardgrön
          700: '#689F38', // mörkare grön för text/knappar
        },
        secondary: {
          100: '#FFF8E1', // ljusgul bakgrund
          500: '#FFD54F', // standardgul
          700: '#FFA000', // mörkare accent
        },
      },
    },
  },
  plugins: [],
};

export default config;
