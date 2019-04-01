<template>
  <div class="page-btns">
    <button
      :class="{
        'prev-btn--activated': isPrevPageExist,
        'prev-btn--deactivated': !isPrevPageExist,
      }"
      class="page-btn prev-btn"
      @click="gotoPrevPage"
    >
      이전◀
    </button>
    <button
      :class="{
        'next-btn--activated': isNextPageExist,
        'next-btn--deactivated': !isNextPageExist,
      }"
      class="page-btn next-btn"
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
      window.scrollTo(0, 0)
    },
    gotoNextPage() {
      if (this.isNextPageExist)
        this.$store.dispatch("pageData/updateCurrentPage", "next")
      window.scrollTo(0, 0)
    },
  },
  computed: {
    ...mapState("pageData", ["pageList", "currentMainPage", "currentSubPage"]),

    ...mapGetters("pageData", ["getCurrentPage"]),

    isPrevPageExist() {
      if (this.getCurrentPage === this.pageList[0][0]) {
        return false
      } else {
        return true
      }
    },

    isNextPageExist() {
      if (
        this.getCurrentPage ===
        this.pageList[this.pageList.length - 1][
          this.pageList[this.pageList.length - 1].length - 1
        ]
      ) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
