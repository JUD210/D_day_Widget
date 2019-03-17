<template>
  <BaseToggleBox class="toggleBox" title="스타일 설정">
    <StyleSettingForm title="위젯" styleFor="styleDDW"></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="D-day 배경"
      styleFor="styleDDWDDayPart"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="D-day 제목"
      styleFor="styleDDWDDayPartTitle"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="D-day 일수"
      styleFor="styleDDWDDayPartDDay"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="D-day 날짜"
      styleFor="styleDDWDDayPartDate"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="타이머 배경"
      styleFor="styleDDWTimerPart"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="타이머 숫자"
      styleFor="styleDDWTimerPartNumber"
    ></StyleSettingForm>
    <br />

    <StyleSettingForm
      title="타이머 글자"
      styleFor="styleDDWTimerPartNumberString"
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
