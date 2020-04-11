<template>
  <div>
    <label>
      <div class="text-center text-bold input-label">{{ label }}</div>
      <input
        :placeholder="placeholder"
        class="input"
        type="text"
        @input="storeData"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputText",
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

<style lang="scss"></style>
