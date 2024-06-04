import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
     content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-opacity': 'rgba(122, 46, 14, 0.3)',
      },
    },
  },
  plugins: [require('daisyui')],
}

