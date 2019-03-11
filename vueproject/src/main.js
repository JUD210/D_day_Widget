import Vue from "vue"
import App from "./App.vue"
import store from "./store/store"

Vue.config.productionTip = false

import BaseToggleBox from "@/components/base/BaseToggleBox.vue"
import router from "./router"
Vue.component("BaseToggleBox", BaseToggleBox)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app")
