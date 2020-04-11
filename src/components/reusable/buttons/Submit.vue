<template>
  <button class="submit-button" @click="$emit('submitted')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Submit",
  props: ["text"]
};
</script>

<style scoped></style>
