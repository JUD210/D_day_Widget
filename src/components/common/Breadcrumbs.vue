<template>
  <!-- If D-day Widget app clicked -->
  <div v-if="forWhat == 'D-Day Widget'" class="breadcrumbs">
    <ul class="breadcrumbs__ul">
      <!-- //@T Add :class (activated) -->
      <li :class="{ activated: isActivated(0) }" @click="gotoPage(0, 0)">
        소개글
      </li>
      <li :class="{ activated: isActivated(1) }" @click="gotoPage(1, 0)">
        시험 정보
      </li>
      <li :class="{ activated: isActivated(2) }" @click="gotoPage(2, 0)">
        <span v-if="currentMainPage < 2">스타일 (0/6)</span>
        <span v-else-if="currentMainPage > 2">스타일 (6/6)</span>
        <span v-else>스타일 ({{ currentSubPage }}/6)</span>
      </li>
      <li :class="{ activated: isActivated(3) }" @click="gotoPage(3, 0)">
        글자 형식
      </li>
      <li :class="{ activated: isActivated(4) }" @click="gotoPage(4, 0)">
        애니메이션
      </li>
    </ul>
  </div>
</template>

<script>
import "@/assets/css/common/Breadcrumbs.css"

import { mapState } from "vuex"

export default {
  name: "Breadcrumbs",
  props: {
    forWhat: {
      type: String,
      default: "",
    },
  },

  methods: {
    gotoPage(mainPage, subPage) {
      let target = [mainPage, subPage]
      this.$store.dispatch("pageData/gotoPage", target)
    },

    isActivated(mainPage) {
      return this.currentMainPage == mainPage
    },
  },

  computed: {
    ...mapState("pageData", ["pageList", "currentMainPage", "currentSubPage"]),
  },
}
</script>
