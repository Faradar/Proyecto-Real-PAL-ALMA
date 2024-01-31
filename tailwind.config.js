/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        'bg': '-100',
      },
      backgroundColor: {
        'eaf0f4': '#EAF0F4',
      },
      width: {
        '600': '600px',
      },
      maxWidth: {
        '600': '600px',
      }
    },
  },
  plugins: [],
}