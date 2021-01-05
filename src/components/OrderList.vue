<template>
  <ul class="cart__orders">
    <OrderItem
      v-for="{ product } in products"
      :product="product"
      :key="product.id"
    />
  </ul>
</template>

<script>
import OrderItem from "./OrderItem";

export default {
  name: "OrderList",
  props: ["products"],
  components: {
    OrderItem,
  },
};
</script>
