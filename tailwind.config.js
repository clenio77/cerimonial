/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        navy: {
          50: '#f0f5fa',
          100: '#dae5f3',
          200: '#b9cce4',
          300: '#8faad0',
          400: '#6384b9',
          500: '#4967a3',
          600: '#3a5187',
          700: '#2f406c',
          800: '#263353',
          900: '#1e2942',
        },
      },
    },
  },
  plugins: [],
}
