<template>
  <BaseToggleBox title="Style">
    <StyleForm title="Exam Title" styleFor="title"></StyleForm>
    <StyleForm title="Exam D-day" styleFor="dday"></StyleForm>
    <StyleForm title="Exam Date" styleFor="date"></StyleForm>
  </BaseToggleBox>
</template>

<script>
import StyleForm from "@/components/d_day_widget/input/setting/form/StyleForm.vue"

export default {
  name: "StyleSetting",
  components: {
    StyleForm,
  },
}
</script>

<style scoped></style>
