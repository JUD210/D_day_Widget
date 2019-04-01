<template>
  <div class="base-page-btns">
    <button
      :class="{
        'prev-btn--activated': isPrevPageExist,
        'prev-btn--deactivated': !isPrevPageExist,
      }"
      class="prev-btn"
      @click="gotoPrevPage"
    >
      이전◀
    </button>
    <button
      :class="{
        'next-btn--activated': isNextPageExist,
        'next-btn--deactivated': !isNextPageExist,
      }"
      class="next-btn"
      @click="gotoNextPage"
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
    gotoPrevPage() {
      if (this.isPrevPageExist)
        this.$store.dispatch("pageData/updateCurrentPage", "prev")
    },
    gotoNextPage() {
      if (this.isNextPageExist)
        this.$store.dispatch("pageData/updateCurrentPage", "next")
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
