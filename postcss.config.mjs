/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅ plugin as an object
    autoprefixer: {},            // ✅ still required
  },
};

export default config;
