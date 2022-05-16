<template>
  <v-col :cols="cols">
    <v-text-field
      dense
      type="text"
      label="Email"
      append-icon=""
      outlined
      color
    ></v-text-field>
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