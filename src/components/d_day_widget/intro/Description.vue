<template>
  <div>
    <AboutDDayWidget></AboutDDayWidget>
    <br />
    <MainFeatures></MainFeatures>
    <br />
    <HowToUse></HowToUse>
    <br />
  </div>
</template>

<script>
import AboutDDayWidget from "@/components/d_day_widget/intro/part/AboutDDayWidget.vue"
import MainFeatures from "@/components/d_day_widget/intro/part/MainFeatures.vue"
import HowToUse from "@/components/d_day_widget/intro/part/HowToUse.vue"

export default {
  components: {
    AboutDDayWidget,
    HowToUse,
    MainFeatures,
  },
}
</script>
