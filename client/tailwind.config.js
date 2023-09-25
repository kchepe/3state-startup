/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        primary_hover: '#302E2E',
        secondary: '#E2E2E2',
      },
      gridTemplateColumns: {
        'card-list': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      boxShadow: {
        glow: '0px 4px 15px 0px rgba(174, 178, 193, 0.10), 0px 0px 29px 0px rgba(1, 62, 181, 0.05), 0px 5px 50px 0px rgba(21, 131, 146, 0.15)',
      },
    },
  },
  plugins: [],
};
