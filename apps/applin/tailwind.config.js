
module.exports = {

  mode: 'jit',
  content: [
    "apps/applin/pages/**/*.{js,ts,jsx,tsx}",
    "apps/applin/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page': "url('/img/bg.jpg')",
        'checkbox-checked': "url('/img/checkbox-checked.svg')",
        'checkbox-unchecked': "url('/img/checkbox-unchecked.svg')",
      },

      borderWidth: {
        '1': '1px'
      },
      colors: {
        primary: "#E9C376", secondary: "#DFB8AC"
      },
      height: {
        '18': '4.5rem'
      },
      width: {
        '18': '4.5rem'
      },
    },
    fontFamily: {
      display: ['Mirage'],
      sans: ['Nunito Sans'],
      handwriting: ["BrittanySignature"],
      serif: ['Roboto Slab']
    }
  },
  plugins: [],
}
