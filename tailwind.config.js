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
        '100': '100px',
        '1250': '1250px',
      },
      maxWidth: {
        '600': '600px',
      },
      width: {
        '95': '95%',
        '80': '80%'
      },
      height: {
        '650': '650px',
        '300': '300px',
        '75': '75px',
      },
      margin: {
        '50': '50px',
        '150': '150px',
      },
    },
  },
  plugins: [],
}