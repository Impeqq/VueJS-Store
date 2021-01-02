<template>
  <router-link
    class="header__cart"
    :to="{ name: 'cart' }"
    aria-label="Корзина с товарами"
  >
    <svg width="30" height="21" fill="currentColor">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span class="header__count" aria-label="Количество товаров">{{
      this.$store.state.cartProducts.length
    }}</span>
  </router-link>
</template>

<script>
export default {};
</script>

<style>
</style>