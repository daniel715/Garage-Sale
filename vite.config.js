
// CODIGO POR DEFECTO AL INSTALAR VITE
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// const { createVuePlugin } = require('vite-plugin-vue2');


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })


//CAMBIANDO CODGIGO PARA USAR VUE2 CON VITE
// import Pages from 'vite-plugin-pages'
// module.exports = {
//   plugins: [createVuePlugin(),vue()],
// };


// export default defineConfig({
//   plugins: [vue()]
// })




import { defineConfig } from 'vite'
import path from 'path'
const { createVuePlugin } = require('vite-plugin-vue2');

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
