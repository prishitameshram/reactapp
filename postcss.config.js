module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Add cssnano for minification in production
    ...(process.env.NODE_ENV === 'production'
      ? { cssnano: { preset: 'default' } }
      : {}),
  },
};
