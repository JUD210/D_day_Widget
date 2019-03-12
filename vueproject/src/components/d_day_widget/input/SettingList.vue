<template>
  <div>
    <ExamsSetting></ExamsSetting>
    <FormatSetting></FormatSetting>
    <StyleSetting></StyleSetting>
    <AnimationSetting></AnimationSetting>
  </div>
</template>

<script>
import ExamsSetting from "@/components/d_day_widget/input/setting/ExamsSetting.vue"
import FormatSetting from "@/components/d_day_widget/input/setting/FormatSetting.vue"
import StyleSetting from "@/components/d_day_widget/input/setting/StyleSetting.vue"
import AnimationSetting from "@/components/d_day_widget/input/setting/AnimationSetting.vue"

export default {
  name: "SettingList",
  components: {
    ExamsSetting,
    FormatSetting,
    StyleSetting,
    AnimationSetting,
  },
}
</script>
