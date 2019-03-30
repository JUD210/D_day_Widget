import Vue from "vue"
import App from "./App.vue"
import store from "./store/store"

Vue.config.productionTip = false

import BaseBox from "@/components/base/BaseBox.vue"
import BaseToggleBox from "@/components/base/BaseToggleBox.vue"
import BasePageBtns from "@/components/base/BasePageBtns.vue"

import router from "./router"

Vue.component("BaseBox", BaseBox)
Vue.component("BaseToggleBox", BaseToggleBox)
Vue.component("BasePageBtns", BasePageBtns)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app")
