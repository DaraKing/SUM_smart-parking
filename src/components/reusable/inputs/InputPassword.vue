<template>
  <div>
    <label>
      <div class="text-center text-bold input-label">{{ label }}</div>
      <input
        :placeholder="placeholder"
        class="input"
        type="password"
        @input="storeData"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputPassword",
  props: ["label", "placeholder", "mutation", "npx"],
  methods: {
    storeData(e) {
      let data = {
        npx: this.npx,
        value: e.target.value
      };

      this.$store.commit(this.mutation, data);
    }
  }
};
</script>

<style scoped></style>
