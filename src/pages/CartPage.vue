<template>
  <BaseLoader v-if="!products" />
  <main class="content container" v-else>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> {{ totalAmount }} товара </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <span class="cart__alert empty" v-if="!totalAmount"
            >В вашей корзине нету товаров</span
          >
          <ul class="cart__list">
            <CartItem
              v-for="item in products"
              :key="item.productId"
              :item="item"
            />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice | numberFormat }} ₽</span>
          </p>

          <router-link
            tag="button"
            :to="{ name: 'order' }"
            class="cart__button button button--primery"
            type="submit"
            v-if="totalAmount"
          >
            Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import CartItem from "@/components/CartItem";
import BaseLoader from "@/components/BaseLoader";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "CartPage",
  filters: {
    numberFormat,
  },
  components: {
    CartItem,
    BaseLoader,
  },
  computed: {
    ...mapGetters({
      products: "cartDetailProducts",
      totalPrice: "cartTotalPrice",
      totalAmount: "cartTotalAmount",
    }),
  },
};
</script>

<style>
.cart__alert.empty {
  font-size: 25px;
  text-align: center;
  display: inline-block;
  width: 100%;
}
</style>