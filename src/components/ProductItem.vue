<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="`img/${product.image}`" :alt="product.name" />
    </a>
    <h3 class="catalog__title">
      <a href="#"> {{ product.name }} </a>
    </h3>
    <span class="catalog__price"> {{ product.price }} ₽ </span>
    <ProductColors
      class="colors--black"
      :arrayOfColors="productColors"
      :currentColor.sync="currentColor"
    />
  </li>
</template>

<script>
import colors from "../data/colors";
import ProductColors from "./ProductColors";

export default {
  name: "ProductItem",
  props: ["product"],
  components: {
    ProductColors,
  },
  data() {
    return {
      currentColor: 0,
      colors,
    };
  },
  computed: {
    productColors() {
      return this.product.colors.map((c) => colors.find((i) => i.id === c));
    },
  },
};
</script>