<template>
  <div>
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
    this.$store.commit("UPDATE_UNIQUE_ID", this.$route.fullPath.split("/")[1])
    this.loadWidgetData()
  },
}
</script>
