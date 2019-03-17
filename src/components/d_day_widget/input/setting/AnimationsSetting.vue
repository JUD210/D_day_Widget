<template>
  <BaseToggleBox class="toggleBox" title="애니메이션">
    <AnimationSettingForm title="날짜 전환"></AnimationSettingForm>
  </BaseToggleBox>
</template>

<script>
import AnimationSettingForm from "@/components/d_day_widget/input/setting/form/AnimationSettingForm.vue"

export default {
  name: "AnimationsSetting",
  components: {
    AnimationSettingForm,
  },
}
</script>
