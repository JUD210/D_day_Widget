<template>
  <div class="setting_list">
    <!-- //@T TODO! Create> Change SettingList to BreadcrumbPages and add <introduction></> -->

    <!-- Intro if == 0 -->

    <!-- <ExamsSetting v-if="Math.floor(currentPage / 100) == 1"></ExamsSetting>
    <StylesSetting v-if="Math.floor(currentPage / 100) == 2"></StylesSetting>
    <FormatsSetting v-if="Math.floor(currentPage / 100) == 3"></FormatsSetting>
    <AnimationsSetting
      v-if="Math.floor(currentPage / 100) == 4"
    ></AnimationsSetting> -->

    <ExamsSetting></ExamsSetting>
    <StylesSetting></StylesSetting>
    <FormatsSetting></FormatsSetting>
    <AnimationsSetting></AnimationsSetting>

    <!-- //@T change -->
    <!-- <button
      v-if="Math.floor(currentPage / 100) == 2"
      class="saveButton"
      @click="saveAndCopyUrl()"
    >
      Save
    </button> -->
    <button class="saveButton" @click="saveAndCopyUrl()">
      Save
    </button>
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/SettingList.css"

import ExamsSetting from "@/components/d_day_widget/input/setting/ExamsSetting.vue"
import StylesSetting from "@/components/d_day_widget/input/setting/StylesSetting.vue"
import FormatsSetting from "@/components/d_day_widget/input/setting/FormatsSetting.vue"
import AnimationsSetting from "@/components/d_day_widget/input/setting/AnimationsSetting.vue"

import { mapState, mapActions } from "vuex"

export default {
  name: "SettingList",

  components: {
    ExamsSetting,
    StylesSetting,
    FormatsSetting,
    AnimationsSetting,
  },
  methods: {
    ...mapActions(["saveWidgetData"]),

    saveAndCopyUrl() {
      this.saveWidgetData()
      this.copyText()
    },
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
    },
  },
  computed: {
    ...mapState("breadcrumbData", ["currentPage"]),
  },
}
</script>
