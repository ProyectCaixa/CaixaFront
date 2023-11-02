module.exports = {
  purge: [
    // Rutas de tus archivos HTML, JSX, PHP, etc., donde se utilizan las clases de Tailwind CSS
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.php',
  ],
  theme: {
    extend: {
      // Configuración del tema
    },
  },
  plugins: [
    // Plugins de Tailwind CSS, si es necesario
  ],
}