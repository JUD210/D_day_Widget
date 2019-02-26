<template>
  <div>
    <ExamsSetting></ExamsSetting>
    <FormatSetting></FormatSetting>
    <StyleSetting></StyleSetting>
    <AnimationSetting></AnimationSetting>
  </div>
</template>

<script>
import ExamsSetting from '@/components/ExamsSetting.vue'
import FormatSetting from '@/components/FormatSetting.vue'
import StyleSetting from '@/components/StyleSetting.vue'
import AnimationSetting from '@/components/AnimationSetting.vue'

export default {
  name: 'SettingList',
  components: {
    ExamsSetting,
    FormatSetting,
    StyleSetting,
    AnimationSetting,
  },
}
</script>

<style scoped></style>
