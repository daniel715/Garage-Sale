<template>
  <div id="app">
      <!-- <h1>App Component</h1> -->
    <component :is="currentLayout" />
  </div>
</template>

<script>
import defaultLayout from "@/layouts/DefaultLayout.vue";
import signinLayout from "@/layouts/SignInLayout.vue";
export default {
  components: {
    defaultLayout,
    signinLayout
  },
  computed: {
    currentLayout() {
      return `${this.$route.meta.layout}Layout`;
    },
  },
  created() {
    console.log("ruta", this.$route);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>