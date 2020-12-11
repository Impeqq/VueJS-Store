<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="`img/${product.image}`" :alt="product.name" />
    </a>
    <h3 class="catalog__title">
      <a href="#"> {{ product.name }} </a>
    </h3>
    <span class="catalog__price"> {{ product.price }} ₽ </span>
    <ProductItemColors
      :itemColors="product.colors"
      :currentColor="currentColor"
    />
  </li>
</template>

<script>
import colors from "../data/colors";
import ProductItemColors from "./ProductItemColors";

export default {
  name: "ProductItem",
  props: ["product"],
  components: {
    ProductItemColors,
  },
  data() {
    return {
      currentColor: 3,
      colors,
    };
  },
};
</script>