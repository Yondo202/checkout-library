/** @type {import('tailwindcss').Config} */
export default {
  // jit: true,
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  prefix: 'clib-',
  plugins: [],
}
