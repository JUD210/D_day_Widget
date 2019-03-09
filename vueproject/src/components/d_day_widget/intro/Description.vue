<template>
  <div>
    <About></About>
    <MainFeatures></MainFeatures>
    <HowToUse></HowToUse>
  </div>
</template>

<script>
import About from "@/components/d_day_widget/intro/part/About.vue"
import MainFeatures from "@/components/d_day_widget/intro/part/MainFeatures.vue"
import HowToUse from "@/components/d_day_widget/intro/part/HowToUse.vue"

export default {
  components: {
    About,
    HowToUse,
    MainFeatures,
  },
}
</script>

<style scoped></style>
