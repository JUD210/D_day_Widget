<template>
  <div>
    <div class="d_day_widget intro">
      <Description></Description>
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget input">
      <SettingList></SettingList>
      <button @click="saveWidgetData()">Save</button>
      <br /><br />
      <button @click="showResult()">Show</button>
    </div>

    <div class="d_day_widget_preview">
      <DDayWidget></DDayWidget>
    </div>
  </div>
</template>

<script>
import Description from "@/components/d_day_widget/intro/Description.vue"

import UniqueIdLoader from "@/components/d_day_widget/input/UniqueIdLoader.vue"
import SettingList from "@/components/d_day_widget/input/SettingList.vue"

import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"

import { mapActions } from "vuex"

export default {
  name: "app",
  components: {
    Description,

    UniqueIdLoader,
    SettingList,

    DDayWidget,
  },
  methods: {
    showResult() {
      this.$router.push({
        name: "d-day-widget-show",
        params: { id: this.$store.state.uniqueId },
      })
    },
    ...mapActions(["saveWidgetData"]),
  },
}
</script>

<style scoped></style>
