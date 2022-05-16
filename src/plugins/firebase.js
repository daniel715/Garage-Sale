
import { initializeApp } from "firebase/app"
import Vue from "vue";
/**
 * creación de axios como prototipo para llmarlo con "this.$axios"
 */



const firebaseConfig = {
    apiKey: "AIzaSyDs0KkYnXP8k9caQ-M8o8pmh4beYGRokes",
    authDomain: "garage-sale-72643.firebaseapp.com",
    projectId: "garage-sale-72643",
    storageBucket: "garage-sale-72643.appspot.com",
    messagingSenderId: "647862291769",
    appId: "1:647862291769:web:4c9d9746b401beaf7eece8"
};


Vue.prototype.$firebase = initializeApp(firebaseConfig);
/**
 * cabeceras para la autenticación con token
 */
//Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`
