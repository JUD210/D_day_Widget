<template>
  <BaseToggleBox title="애니메이션 설정">
    <AnimationSettingForm></AnimationSettingForm>
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
