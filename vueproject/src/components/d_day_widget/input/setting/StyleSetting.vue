<template>
  <BaseToggleBox title="Style">
    <StyleForm title="Exam Title" styleFor="titleStyle"></StyleForm>
    <br />
    <StyleForm title="Exam D-day" styleFor="ddayStyle"></StyleForm>
    <br />
    <StyleForm title="Exam Date" styleFor="dateStyle"></StyleForm>
    <br />
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
