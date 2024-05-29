import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.{mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
};
export default config;
