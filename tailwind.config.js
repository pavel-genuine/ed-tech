/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/free-photo/islamic-new-year-concept-with-copy-space_23-2148611773.jpg?t=st=1656139594~exp=1656140194~hmac=5a999a8c9ab18f8314cb6cd00a7cc3078862c9ff1a9824fad8343dc26830f689&w=1380')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],}
