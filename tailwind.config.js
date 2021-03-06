module.exports = {
  mode: 'jit',
  content: [
    "apps/applin/pages/**/*.{js,ts,jsx,tsx}",
    "apps/applin/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9C376", secondary: "#DFB8AC"
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
