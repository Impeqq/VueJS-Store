<template>
  <li class="cart__order">
    <h3>{{ product.title }}</h3>
    <b v-if="+product.price">{{ product.price | numberFormat }} ₽</b>
    <span>Артикул: {{ product.id }}</span>
  </li>
</template>

<script>
import ProductColors from "./ProductColors";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "OrderItem",
  props: ["product"],
  components: {
    ProductColors,
  },
  filters: {
    numberFormat,
  },
};
</script>