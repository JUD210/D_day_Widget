<template>
  <BaseToggleBox title="Style">
    <StyleForm title="Exam Title" styleFor="styleTitle"></StyleForm>
    <br />
    <StyleForm title="Exam D-day" styleFor="styleDDay"></StyleForm>
    <br />
    <StyleForm title="Exam Date" styleFor="styleDate"></StyleForm>
    <br />
  </BaseToggleBox>
</template>

<script>
import StyleForm from "@/components/d_day_widget/input/setting/form/StyleForm.vue"

export default {
  name: "StylesSetting",
  components: {
    StyleForm,
  },
}
</script>
