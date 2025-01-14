/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B', // Midnight Blue
          light: '#64748B',  // Slate Gray
        },
        accent: {
          DEFAULT: '#0D9488', // Teal Green
          orange: '#F97316', // Warm Orange
        },
        neutral: {
          DEFAULT: '#F3F4F6', // Light Gray
          white: '#FFFFFF', //White
        },
        success: '#22C55E', // Green
        warning: '#FACC15', // Yellow
        error: '#EF4444', //Red
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

