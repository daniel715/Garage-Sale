// TEXTO POR DEFECTO CUANDO SE INSTALA VITE
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// CAMBIANDO CODIGO PARA USAR VUE2 CON VITE
import Vue from 'vue';
import App from './App.vue';
import './index.css'
import router from './router';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize"
import "./plugins/firebase"


export default new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");