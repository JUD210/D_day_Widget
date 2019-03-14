<template>
  <BaseToggleBox title="Animation">
    <AnimationForm></AnimationForm>
  </BaseToggleBox>
</template>

<script>
import AnimationForm from "@/components/d_day_widget/input/setting/form/AnimationForm.vue"

export default {
  name: "AnimationsSetting",
  components: {
    AnimationForm,
  },
}
</script>
