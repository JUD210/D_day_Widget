import Vue from "vue"
import App from "./App.vue"
import store from "./store/store"

Vue.config.productionTip = false

import BaseToggleBox from "@/components/base/BaseToggleBox.vue"
Vue.component("BaseToggleBox", BaseToggleBox)

new Vue({
  store,
  render: h => h(App),
}).$mount("#app")
