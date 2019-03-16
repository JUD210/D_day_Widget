<template>
  <BaseToggleBox title="Animation">
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
