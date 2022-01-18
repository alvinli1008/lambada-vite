module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  important: true,
  purge: {
    // eslint-disable-next-line no-undef
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
