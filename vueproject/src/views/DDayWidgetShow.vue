<template>
  <div>
    <input
      type="text"
      id="copy_url"
      :value="url"
      style="width: 100%;"
      readonly
    />
    <!-- // !TODO: copyText -->
    <button @click="copyText">
      이 버튼을 누르면 URL 주소값이 복사될 것이여
    </button>

    <DDayWidget></DDayWidget>
  </div>
</template>

<script>
import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"
import { mapState } from "vuex"

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
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
      alert("Copied the text: " + copyText.value)
    },
  },

  created() {},
}
</script>

<style scoped></style>
