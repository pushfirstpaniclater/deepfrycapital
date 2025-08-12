/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        grease: "#FFC72C", 
        ketchup: "#DA291C", 
        neon: "#FFC72C",
      },
      boxShadow: { 
        glow: "0 0 30px rgba(138,255,239,.35)" 
      },
      backgroundImage: { 
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)" 
      }
    },
  },
  plugins: [],
}
