<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("formSubmitted", { name: this.name });
    },
  },
};
</script>
