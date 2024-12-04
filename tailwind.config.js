/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}", // Include files in the src folder
    "./src/**/*.{js,jsx,ts,tsx}", // Include files in nested directories
    "./src/**/**/*.{js,jsx,ts,tsx}", // Include files in deeply nested directories
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
