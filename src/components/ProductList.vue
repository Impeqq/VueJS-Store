<template>
  <ul class="catalog__list">
    <ProductItem
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductList",
  props: ["products"],
  components: {
    ProductItem,
  },
};
</script>
