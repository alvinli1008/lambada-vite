const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  important: true,
  purge: {
    // eslint-disable-next-line no-undef
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: []
};
