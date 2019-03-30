<template>
  <div class="base-page-btns">
    <button
      v-if="isPrevPageExist"
      class="page-btn prev-btn"
      @click="updateCurrentPage('prev')"
    >
      ◀이전
    </button>
    <button
      v-if="isNextPageExist"
      class="page-btn next-btn"
      @click="updateCurrentPage('next')"
    >
      ▶다음
    </button>
  </div>
</template>

<script>
import "@/assets/css/base/BasePageBtns.css"
import { mapState, mapGetters } from "vuex"

export default {
  name: "BasePageBtns",
  data() {
    return {}
  },
  methods: {
    updateCurrentPage(cmd) {
      this.$store.dispatch("pageData/updateCurrentPage", cmd)
    },
  },
  computed: {
    ...mapState("pageData", ["allPages", "currentMainPage", "currentSubPage"]),

    ...mapGetters("pageData", ["getCurrentPage"]),

    isPrevPageExist() {
      if (this.getCurrentPage == "Intro-Introduction") {
        return false
      } else {
        return true
      }
    },

    isNextPageExist() {
      if (this.getCurrentPage == "Outro-Save") {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
