<template>
  <li class="catalog__item">
    <a
      class="catalog__pic"
      @click.prevent="gotoPage('product', { id: product.id })"
    >
      <img :src="`img/${product.image}`" :alt="product.name" />
    </a>
    <h3 class="catalog__title">
      <a @click.prevent="gotoPage('product', { id: product.id })">
        {{ product.name }}
      </a>
    </h3>
    <span class="catalog__price"> {{ product.price | numberFormat }} ₽ </span>
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

import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";

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
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  computed: {
    productColors() {
      return this.product.colors.map((c) => colors.find((i) => i.id === c));
    },
  },
};
</script>