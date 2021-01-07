<template>
  <div class="cart__delivery">
    <h3 class="cart__title">Доставка</h3>
    <ul class="cart__options options">
      <li class="options__item" v-for="method in methods" :key="method.id">
        <label class="options__label">
          <input
            class="options__radio sr-only"
            type="radio"
            :value="method.price"
            v-model="computedDeliveryMethod"
          />
          <span class="options__value" v-html="method.text" />
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import deliveryMethods from "@/data/deliveryMethods";

export default {
  name: "OrderDelivery",
  props: ["currentDeliveryMethodPrice"],
  data() {
    return {
      methods: deliveryMethods,
    };
  },
  computed: {
    computedDeliveryMethod: {
      get() {
        return this.currentDeliveryMethodPrice;
      },

      set(value) {
        this.$emit("update:currentDeliveryMethodPrice", value);
      },
    },
  },
};
</script>

<style>
.cart__delivery {
  margin-bottom: 20px;
}
</style>