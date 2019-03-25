<template>
  <div class="setting_list">
    <ExamsSetting></ExamsSetting>
    // @T TODO! PRESETS
    <!-- <div style="font-size: 30px;color:red;">TODO! Presets Setting</div> -->
    <StylesSetting></StylesSetting>
    <FormatsSetting></FormatsSetting>
    <AnimationsSetting></AnimationsSetting>
  </div>
</template>

<script>
import ExamsSetting from "@/components/d_day_widget/input/setting/ExamsSetting.vue"
import StylesSetting from "@/components/d_day_widget/input/setting/StylesSetting.vue"
import FormatsSetting from "@/components/d_day_widget/input/setting/FormatsSetting.vue"
import AnimationsSetting from "@/components/d_day_widget/input/setting/AnimationsSetting.vue"

export default {
  name: "SettingList",
  components: {
    ExamsSetting,
    StylesSetting,
    FormatsSetting,
    AnimationsSetting,
  },
}
</script>
