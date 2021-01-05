<template>
  <main class="content container" v-if="!orderInfo">
    <div class="content__alert error">
      Заявки с таким номером не существует, либо произошла ошибка сервера.
      <br />
      <router-link :to="{ name: 'main' }">Вернуться на главную</router-link>
    </div>
  </main>
  <main class="content container" v-else>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'cart' }">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Оформление заказа </a>
        </li>
      </ul>

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ orderInfo.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет
            письмо с&nbsp;деталями заказа. Наши менеджеры свяжутся с&nbsp;Вами
            в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key"> Получатель </span>
              <span class="dictionary__value">
                {{ orderInfo.name }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Адрес доставки </span>
              <span class="dictionary__value">
                {{ orderInfo.address }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Телефон </span>
              <span class="dictionary__value"> {{ orderInfo.phone }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Email </span>
              <span class="dictionary__value"> {{ orderInfo.email }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Способ оплаты </span>
              <span class="dictionary__value"> картой при получении </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <OrderList :products="orderInfo.basket.items" />

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>
              Итого: <b>{{ orderInfo.totalAmount }}</b> товара на сумму
              <b>{{ orderInfo.totalPrice | numberFormat }} ₽</b>
            </p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";
import OrderList from "@/components/OrderList";

export default {
  name: "OrderInfoPage",
  filters: {
    numberFormat,
  },
  components: {
    OrderList,
  },
  computed: {
    orderInfo() {
      return this.$store.state.orderInfo;
    },
  },
  created() {
    if (
      this.$store.state.orderInfo &&
      this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return;
    }

    this.$store.dispatch("loadOrderInfo", this.$route.params.id);
  },
};
</script>

<style>
.content__alert {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}

.content__alert a {
  margin-top: 15px;
  display: inline-block;
  color: #9eff00;
  background: #222;
  padding: 10px;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 5px;
}
</style>