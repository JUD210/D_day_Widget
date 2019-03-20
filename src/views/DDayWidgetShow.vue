<template>
  <div>
    <h1>test</h1>
    <DDayWidget></DDayWidget>
  </div>
</template>

<script>
import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"
import { mapActions } from "vuex"

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

  methods: {
    ...mapActions(["loadWidgetData"]),
  },

  created() {
    let p = this.$route.fullPath

    this.$store.dispatch(
      "uniqueId/updateUniqueId",
      p.slice(p.indexOf("/ddw/") + 5),
    )
    this.loadWidgetData()
  },
}
</script>
