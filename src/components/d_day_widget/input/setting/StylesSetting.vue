<template>
  <BaseToggleBox title="Style">
    <StyleSettingForm
      title="Exam Title"
      styleFor="styleTitle"
    ></StyleSettingForm>
    <br />
    <StyleSettingForm
      title="Exam D-day"
      styleFor="styleDDay"
    ></StyleSettingForm>
    <br />
    <StyleSettingForm
      title="Exam Timer"
      styleFor="styleDate"
    ></StyleSettingForm>
    <br />
    <StyleSettingForm title="Exam Date" styleFor="styleDate"></StyleSettingForm>
    <br />
  </BaseToggleBox>
</template>

<script>
import StyleSettingForm from "@/components/d_day_widget/input/setting/form/StyleSettingForm.vue"

export default {
  name: "StylesSetting",
  components: {
    StyleSettingForm,
  },
}
</script>
