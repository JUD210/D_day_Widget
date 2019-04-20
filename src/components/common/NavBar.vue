<template>
  <div class="nav-bar">
    <h1 class="nav-bar__title">
      공부방송 도우미
      <span style="font-size:20px;">v0.31</span>
      <div style="font-size:20px;">Made by 잉혁킹</div>
    </h1>

    <nav class="nav-bar__links" @click="gotoPage(0, 0)">
      <router-link class="activated" :to="{ name: 'd-day-widget-generator' }"
        >D-day 위젯</router-link
      >
      <!-- <a onclick="alert('제작중입니다.')">(제작중) 뽀모도로 타이머</a> -->
    </nav>

    <Breadcrumbs :forWhat="'D-Day Widget'"></Breadcrumbs>
  </div>
</template>

<script>
import "@/assets/css/common/NavBar.css"

import Breadcrumbs from "@/components/common/Breadcrumbs.vue"

export default {
  name: "NavBar",
  components: {
    Breadcrumbs,
  },
  methods: {
    gotoPage(mainPage, subPage) {
      console.log(mainPage, subPage)
      let target = [mainPage, subPage]
      this.$store.dispatch("pageData/gotoPage", target)
    },
  },
}
</script>
