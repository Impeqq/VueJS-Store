import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";

Vue.use(VueRouter);

const routes = [
  { name: "main", component: MainPage, path: "/" },
  { name: "product", component: ProductPage, path: "/product/:id" },
  { name: "cart", component: CartPage, path: "/cart" },
  { name: "notFound", component: NotFoundPage, path: "*" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
