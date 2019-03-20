import Vue from "vue"
import Router from "vue-router"

import DDayWidgetGenerator from "@/views/DDayWidgetGenerator.vue"
import DDayWidgetShow from "@/views/DDayWidgetShow.vue"

Vue.use(Router)

export default new Router({
  // mode: "history",
  //
  // Deletes /#/ but, make this app SPA
  // : In history mode, Router doesn't work on GitHub Page (No SPA)

  base: process.env.BASE_URL,
  //
  // This is essential with publicPath (in vue.config.js)
  // : If base isn't here, Router doesn't work on GitHub page

  routes: [
    {
      path: "/",
      name: "d-day-widget-generator",
      component: DDayWidgetGenerator,
    },
    {
      path: "/ddw/:id",
      name: "d-day-widget-show",
      component: DDayWidgetShow,
      props: true,
    },
  ],
})
