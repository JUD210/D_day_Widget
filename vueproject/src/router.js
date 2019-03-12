import Vue from "vue"
import Router from "vue-router"

import DDayWidgetGenerator from "@/views/DDayWidgetGenerator.vue"
import DDayWidgetShow from "@/views/DDayWidgetShow.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "d-day-widget-generator",
      component: DDayWidgetGenerator,
    },
    {
      path: "/:id/ddw",
      name: "d-day-widget-show",
      component: DDayWidgetShow,
      props: true,
    },
  ],
})
