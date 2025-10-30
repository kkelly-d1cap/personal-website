import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        white: '#FFFFFF',
        'light-gray': '#F5F5F5',
        'medium-gray': '#6B6B6B',
        orange: '#FF9F40',
        lime: '#C5F542',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      boxShadow: {
        card: '0 20px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
