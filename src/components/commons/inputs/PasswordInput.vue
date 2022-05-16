<template>
  <v-col :cols="cols">
    <div>
      <v-text-field
        dense
        type="password"
        label="Contrasena"
        append-icon=""
        outlined
        color
      ></v-text-field>
    </div>
  </v-col>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "text",
    },
    type: {
      type: String,
      default: "",
    },
    cols: {
      type: String,
      default: "",
    },
  },
};
</script>