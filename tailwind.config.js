/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppinsbold: ["Poppins Bold", "sans-serif"],
      poppinssemibold: ["Poppins SemiBold", "sans-serif"],
      poppinsmedium: ["Poppins Medium", "sans-serif"],
      poppinsmediumitalic: ["Poppins Medium Italic", "sans-serif"],
      poppinsregular: ["Poppins Regular", "sans-serif"],
      poppinslight: ["Poppins Light", "sans-serif"],
      brolimo: ["Brolimo Bold", "sans-serif"],
      abhaya: ["Abhaya Libre", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
