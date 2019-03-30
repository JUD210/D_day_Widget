<template>
  <BaseBox title="스타일">
    <StyleSettingForm
      title="D-day 배경"
      styleFor="styleDDWDDayPart"
    ></StyleSettingForm>

    <StyleSettingForm
      title="D-day 제목"
      styleFor="styleDDWDDayPartTitle"
    ></StyleSettingForm>

    <StyleSettingForm
      title="D-day 일수"
      styleFor="styleDDWDDayPartDDay"
    ></StyleSettingForm>

    <StyleSettingForm
      title="D-day 날짜"
      styleFor="styleDDWDDayPartDate"
    ></StyleSettingForm>

    <StyleSettingForm
      title="타이머 배경"
      styleFor="styleDDWTimerPart"
    ></StyleSettingForm>

    <StyleSettingForm
      title="타이머 숫자"
      styleFor="styleDDWTimerPartNumber"
    ></StyleSettingForm>

    <StyleSettingForm
      title="타이머 글자"
      styleFor="styleDDWTimerPartNumberString"
    ></StyleSettingForm>
  </BaseBox>
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
