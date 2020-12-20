<template>
  <component :is="currentPageComponent" :page-params="currentPageParams" />
</template>

<script>
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

import eventBus from "@/eventBus";

const routes = {
  main: "MainPage",
  product: "ProductPage",
};

export default {
  name: "App",
  data() {
    return {
      currentPage: "main",
      currentPageParams: {},
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || "NotFoundPage";
    },
  },
  created() {
    eventBus.$on("gotoPage", (pageName, pageParams) =>
      this.gotoPage(pageName, pageParams)
    );
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
