<template>
  <ul class="catalog__list">
    <li v-for="product in products" :key="product.name" class="catalog__item">
      <a class="catalog__pic" href="#">
        <img
          :src="`img/${product.image}`"
          :alt="product.name"
        />
      </a>
      <h3 class="catalog__title">
        <a href="#"> {{product.name}} </a>
      </h3>
      <span class="catalog__price"> {{product.price}} </span>
      <ul class="colors colors--black">
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#73B6EA"
              checked=""
            />
            <span class="colors__value" style="background-color: #73b6ea">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#8BE000"
            />
            <span class="colors__value" style="background-color: #8be000">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#222"
            />
            <span class="colors__value" style="background-color: #222"> </span>
          </label>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products'],
};
</script>
