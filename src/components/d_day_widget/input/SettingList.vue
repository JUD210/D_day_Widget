<template>
  <div class="setting_list">
    <!-- //@T TODO! Create> Change SettingList to BreadcrumbPages and add <introduction></> -->

    <!-- Intro if == 0 -->

    <ExamsSetting></ExamsSetting>
    <StylesSetting></StylesSetting>
    <FormatsSetting></FormatsSetting>
    <AnimationsSetting></AnimationsSetting>

    <BasePageBtns></BasePageBtns>
  </div>
</template>

<script>
import ExamsSetting from "@/components/d_day_widget/input/setting/ExamsSetting.vue"
import StylesSetting from "@/components/d_day_widget/input/setting/StylesSetting.vue"
import FormatsSetting from "@/components/d_day_widget/input/setting/FormatsSetting.vue"
import AnimationsSetting from "@/components/d_day_widget/input/setting/AnimationsSetting.vue"

import { mapGetters } from "vuex"

export default {
  name: "SettingList",

  components: {
    ExamsSetting,
    StylesSetting,
    FormatsSetting,
    AnimationsSetting,
  },
  computed: {
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>
