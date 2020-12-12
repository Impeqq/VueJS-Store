<template>
  <ul class="colors" :class="{ 'colors--black': isProduct }">
    <li class="colors__item" v-for="color in arrayOfColors" :key="color.id">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          :value="color.id || color"
          v-model="computedColor"
          :checked="
            (computedColor == color.id || computedColor == color) && 'checked'
          "
        />
        <span
          class="colors__value"
          :style="`background-color: ${
            color.color || colors.filter((item) => item.id === color)[0].color
          }`"
        >
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
import colors from "../data/colors";
export default {
  name: "ProductColors",
  props: ["arrayOfColors", "currentColor", "isProduct"],
  data() {
    return {
      colors,
    };
  },
  computed: {
    computedColor: {
      get() {
        return this.currentColor;
      },
      set(value) {
        this.$emit("update:currentColor", value);
      },
    },
  },
};
</script>