<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <img :src="product.image" :alt="product.title" />
    </router-link>
    <h3 class="catalog__title">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        {{ product.title }}
      </router-link>
    </h3>
    <span class="catalog__price" v-if="+product.price">
      {{ product.price | numberFormat }} ₽
    </span>
    <ProductColors
      class="colors--black"
      :arrayOfColors="product.colors"
      :currentColor.sync="currentColor"
    />
  </li>
</template>

<script>
import ProductColors from "./ProductColors";

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
    };
  },
  filters: {
    numberFormat,
  },
  computed: {
    productColors() {
      return this.product.colors.map((c) => colors.find((i) => i.id === c));
    },
  },
};
</script>