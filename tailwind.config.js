/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        whitebrown : '#F2EAD3',
        darkbrown : '#3F2305',
        cgrey : '#F5F5F5',
        cgreen : '#47A992',
        dgreen : '#4A2C2C',
        namegreen : '#698269',
        dchocolate : '#765827',
        wchoco : '#A4907C',
        dpink : '#B21E4B',
        card : '#DFD7BF',
      },
      fontFamily: {
        vollkorn : ['Vollkorn', 'serif'], // Replace 'Your Custom Font' with the font name
        lilita  : ['Lilita One', 'cursive'],
      },
    },
  },
  plugins: [],
}
