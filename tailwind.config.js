/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robo:[ "Roboto", "sans-serif"]
      },
      borderRadius: {
        'custom-shape': '5% 5% 15% 22%', // Define your custom border-radius
        'custom-shape-2':'4% 0% 0% 4%'
      },

    },
  },
  plugins: [],
}

