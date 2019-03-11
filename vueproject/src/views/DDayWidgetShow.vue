<template>
  <div>
    <DDayWidget></DDayWidget>
  </div>
</template>

<script>
import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"

export default {
  components: {
    DDayWidget,
  },
  props: {
    id: {
      type: [String],
      default: null,
    },
  },

  created() {},
}
</script>

<style scoped></style>
