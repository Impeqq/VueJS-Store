<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="`img/${product.image}`" :alt="product.name" />
    </a>
    <h3 class="catalog__title">
      <a href="#"> {{ product.name }} </a>
    </h3>
    <span class="catalog__price"> {{ product.price }} ₽ </span>
    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="color"
            v-model="currentColor"
            :checked="currentColor == color && 'checked'"
          />
          <span class="colors__value" :style="`background-color: ${color}`">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
  data() {
    return {
      currentColor: "#73b6ea",
    };
  },
};
</script>

<style>
</style>