<template>
  <BaseBoxContainer v-if="getCurrentPage.split('-')[0] === 'Intro'">
    <AboutDDayWidget></AboutDDayWidget>
    <br />
    <MainFeatures></MainFeatures>
    <br />
    <HowToUse></HowToUse>
    <br />
  </BaseBoxContainer>
</template>

<script>
import AboutDDayWidget from "@/components/d_day_widget/intro/part/AboutDDayWidget.vue"
import MainFeatures from "@/components/d_day_widget/intro/part/MainFeatures.vue"
import HowToUse from "@/components/d_day_widget/intro/part/HowToUse.vue"

import { mapGetters } from "vuex"

export default {
  components: {
    AboutDDayWidget,
    HowToUse,
    MainFeatures,
  },
  computed: {
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>
