module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js','../../node_modules/preline/preline.js'],
  theme: {
      extend: {
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
      },
  },
  plugins: [require('preline/plugin')],
};