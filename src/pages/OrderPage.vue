<template>
  <main class="content container">
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

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> 3 товара </span>
    </div>

    <section class="cart">
      <form
        class="cart__form form"
        action="#"
        method="POST"
        @submit.prevent="order"
      >
        <div class="cart__field">
          <div class="cart__data">
            <BaseFormText
              title="ФИО"
              placeholder="Введите ваше полное имя"
              v-model="formData.name"
              :error="formError.name"
            />
            <BaseFormText
              title="Адрес доставки"
              placeholder="Введите ваш адрес"
              v-model="formData.address"
              :error="formError.address"
            />
            <BaseFormText
              title="Телефон"
              type="tel"
              placeholder="Введите ваш телефон"
              v-model="formData.phone"
              :error="formError.phone"
            />
            <BaseFormText
              title="Email"
              type="email"
              placeholder="Введи ваш Email"
              v-model="formData.email"
              :error="formError.email"
            />
            <BaseFormTextarea
              title="Комментарий к заказу"
              placeholder="Ваши пожелания"
              v-model="formData.comment"
              :error="formError.comment"
            />
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="delivery"
                    value="0"
                    checked=""
                  />
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="delivery"
                    value="500"
                  />
                  <span class="options__value"> Курьером <b>500 ₽</b> </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="pay"
                    value="card"
                  />
                  <span class="options__value"> Картой при получении </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="pay"
                    value="cash"
                  />
                  <span class="options__value"> Наличными при получении </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <OrderList :products="products" />

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>
              Итого: <b>{{ totalAmount }}</b> товара на сумму
              <b>{{ totalPrice | numberFormat }} ₽</b>
            </p>
          </div>

          <button
            class="cart__button button button--primery"
            type="submit"
            v-if="!orderLoading"
          >
            Оформить заказ
          </button>
          <BaseLoader v-if="orderLoading" />
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import BaseFormText from "@/components/BaseFormText";
import BaseFormTextarea from "@/components/BaseFormTextarea";
import OrderList from "@/components/OrderList";
import BaseLoader from "@/components/BaseLoader.vue";
import { API_BASE_URL } from "@/config";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "OrderPage",
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: "",
      orderLoading: false,
    };
  },
  components: {
    BaseFormText,
    BaseFormTextarea,
    OrderList,
    BaseLoader,
  },
  filters: {
    numberFormat,
  },
  computed: {
    ...mapGetters({
      products: "cartDetailProducts",
      totalPrice: "cartTotalPrice",
      totalAmount: "cartTotalAmount",
    }),
  },
  methods: {
    order() {
      this.formError = {};
      this.formErrorMessage = "";
      this.orderLoading = true;
      clearTimeout(this.loadOrderTimer);
      this.loadOrderTimer = setTimeout(() => {
        axios
          .post(
            `${API_BASE_URL}/api/orders`,
            {
              ...this.formData,
            },
            {
              params: {
                userAccessKey: this.$store.state.userAccessKey,
              },
            }
          )
          .then((response) => {
            this.$store.commit("resetCart");
            this.$store.commit("updateOrderInfo", response.data);
            this.$router.push({
              name: "orderInfo",
              params: { id: response.data.id },
            });
          })
          .catch((error) => {
            this.formError = error.response.data.error.request || {};
            this.formErrorMessage = error.response.data.error.message || "";
          })
          .then(() => {
            this.orderLoading = false;
          });
      }, 2000);
    },
  },
};
</script>
