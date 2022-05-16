<template>
  <div class="container">
    <img width="250px" src="../assets/garage-sale-logo.jpeg" alt="logo" />
    <base-input
      class="mx-auto"
      v-model="email"
      type="email"
      cols="3"
      label="Email"
    />
    <password-input
      class="mx-auto"
      v-model="password"
      cols="3"
      label="Contraseña"
    />
    <v-btn @click="signIn" color="success" elevation="5">Iniciar Sesion</v-btn>
  </div>
</template>
<script>
import baseInput from "@/components/commons/inputs/BaseInput.vue";
import passwordInput from "@/components/commons/inputs/PasswordInput.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  components: {
    baseInput,
    passwordInput,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    signIn() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed In
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error en la autenticacion", errorMessage);
        });
    },
  },
  created() {},
};
</script>