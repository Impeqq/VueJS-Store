<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="color in itemColors" :key="color">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          :value="color"
          v-model="currentColor"
          :checked="currentColor == color && 'checked'"
        />
        <span
          class="colors__value"
          :style="`background-color: ${
            colors.filter((item) => item.id === color && item.color)[0].color
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
  name: "ProductItemColors",
  props: ["itemColors", "currentColor"],
  data() {
    return {
      colors,
    };
  },
};
</script>