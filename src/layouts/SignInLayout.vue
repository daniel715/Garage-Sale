<template>
<!-- <div class="container h-screen flex items-center"></div> -->
  <div class="h-screen flex items-center">
    <div class="card p-10 border-2 w-80 m-auto mt-56">
      <img src="../assets/garage-sale-logo.jpeg" alt="logo" />
      <base-input type="email" class="mt-10" label="Email" />
      <password-input  class="mt-8" label="Contraseña" />
      <button class="bg-blue-400 hover:bg-blue-500 text-white w-full rounded mt-6 h-10" >Iniciar Sesion</button>
    </div>
  </div>
</template>
<script>
import baseInput from "@/components/commons/inputs/BaseInput.vue";
import passwordInput from "@/components/commons/inputs/PasswordInput.vue";
export default {
  components: {
    baseInput,
    passwordInput,
  },
  created() {
    console.log("en signinlayput");
  },
};
</script>