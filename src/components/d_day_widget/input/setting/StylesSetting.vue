<template>
  <BaseToggleBox title="Style">
    <StyleSettingForm
      title="Exam Title"
      styleFor="styleDDayPartTitle"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="Exam D-day"
      styleFor="styleDDayPartDDay"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm title="Exam Date" styleFor="styleDDayPartDate">
    </StyleSettingForm>
    <br />

    <StyleSettingForm
      title="Exam Timer"
      styleFor="styleTimerPart"
    ></StyleSettingForm>
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
