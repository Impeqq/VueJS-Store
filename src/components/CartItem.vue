<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img
        :src="`/img/${item.product.image}`"
        :alt="item.product.name"
        width="120"
        height="120"
      />
    </div>
    <h3 class="product__title">
      {{ item.product.name }}
    </h3>
    <span class="product__code"> Артикул: {{ item.product.id }} </span>

    <BaseInputSpinner
      class="product__counter form__counter"
      :amount.sync="amount"
    />

    <b class="product__price">
      {{ (item.amount * item.product.price) | numberFormat }} ₽
    </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
      @click.prevent="deleteProduct(item.product.id)"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import numberFormat from "../helpers/numberFormat";
import BaseInputSpinner from "@/components/BaseInputSpinner";
import { mapMutations } from "vuex";

export default {
  filters: {
    numberFormat,
  },
  props: ["item"],
  components: {
    BaseInputSpinner,
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },

      set(value) {
        if (value >= 0) {
          this.$store.commit("updateCartProductAmount", {
            productId: this.item.productId,
            amount: value,
          });
        }
      },
    },
  },
  methods: {
    ...mapMutations({
      deleteProduct: "deleteCartProduct",
    }),
  },
};
</script>

<style>
</style>