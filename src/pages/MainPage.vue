<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info">
        кол-во товаров - {{ countProducts || 0 }}
      </span>
    </div>
    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :color.sync="filterColor"
      />

      <section class="catalog">
        <BaseLoader v-if="productsLoading" />
        <div v-if="productsLoadingFailed">
          Произошла ошибка при загрузке товаров
          <button @click.prevent="loadProducts()">Попробовать еще раз</button>
        </div>
        <span class="catalog__alert empty" v-if="productsFiltredEmpty"
          >Нет соответствующих товаров</span
        >
        <ProductList :products="products" />
        <BasePagination
          v-if="paginatable"
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import { API_BASE_URL } from "@/config";

export default {
  name: "MainPage",
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
    BaseLoader,
  },
  data() {
    return {
      page: 1,
      productsPerPage: 3,

      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,

      productData: null,
      productsLoading: false,
      productsLoadingFailed: false,
      productsFiltredEmpty: false,
    };
  },
  computed: {
    paginatable() {
      return (
        !this.productsLoading &&
        !this.productsLoadingFailed &&
        !this.productsFiltredEmpty
      );
    },
    products() {
      return (
        this.productData &&
        this.productData.items.map((product) => {
          return {
            ...product,
            image: product.image.file.url,
          };
        })
      );
    },
    countProducts() {
      return this.productData && (this.productData.pagination.total || 0);
    },
  },
  methods: {
    loadProducts() {
      this.productData = null;
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      this.productsFiltredEmpty = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(`${API_BASE_URL}/api/products`, {
            params: {
              page: this.page,
              limit: this.productsPerPage,
              categoryId: this.filterCategoryId,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo,
              colorId: this.filterColor,
            },
          })
          .then((response) => {
            if (response.data.items.length) {
              this.productData = response.data;
            } else {
              this.productsFiltredEmpty = true;
            }
          })
          .catch(() => (this.productsLoadingFailed = true))
          .then(() => (this.productsLoading = false));
      }, 1000);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterColor() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>;


<style>
.catalog__alert.empty {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}
</style>