module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-plugin': env === 'production' ? {} : false
  },
};
