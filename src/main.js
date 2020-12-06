import Vue from "vue";
import App from "./App.vue";

// import { data1 } from "./data/data";
// import { data2 } from "./data/data";

// import functionAlert from "./data/function";

// functionAlert(data1);
// functionAlert(data2);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
