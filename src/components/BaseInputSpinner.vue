<template>
  <div>
    <button
      type="button"
      aria-label="Убрать один товар"
      @click.prevent="computedAmount--"
    >
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="computedAmount" name="count" />

    <button
      type="button"
      aria-label="Добавить один товар"
      @click.prevent="computedAmount++"
    >
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseInputSpinner",
  props: ["amount", "productId"],
  computed: {
    computedAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        this.$emit("update:amount", value);
      },
    },
  },
};
</script>

