<template>
  <div>
    <input
      type="text"
      id="copy_url"
      :value="url"
      style="width: 100%;"
      readonly
    />

    <button @click="copyText">
      이 버튼을 누르면 URL 주소값이 복사될 것이여
    </button>

    <DDayWidget></DDayWidget>
  </div>
</template>

<script>
import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"
import { mapState, mapActions } from "vuex"

export default {
  props: {
    id: {
      type: [String],
      default: null,
    },
  },

  components: {
    DDayWidget,
  },

  computed: {
    ...mapState(["uniqueId"]),

    url() {
      return `http://www.gongbanghelper.com${this.$route.fullPath}`
    },
  },

  methods: {
    ...mapActions(["loadWidgetData"]),
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
      alert("Copied the text: " + copyText.value)
    },
  },

  created() {
    this.$store.commit(
      "UPDATE_UNIQUE_ID",
      this.$route.fullPath.split("/").pop(),
    )

    this.loadWidgetData()
  },
}
</script>

<style scoped>
/* //!TODO: FIX PREVIEW  */
</style>
