// TEXTO POR DEFECTO CUANDO SE INSTALA VITE
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// CAMBIANDO CODIGO PARA USAR VUE2 CON VITE
import Vue from 'vue';
import App from './App.vue';
import './index.css'
import router from './router';


export default new Vue({
  router,
  render: h => h(App)
}).$mount("#app");