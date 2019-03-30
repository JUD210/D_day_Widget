<template>
  <BaseBox v-if="getCurrentPage.split('-')[0] === 'Styles'" title="스타일">
    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'DDayPart'"
      title="D-day 배경"
      styleFor="styleDDWDDayPart"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'DDayPartTitle'"
      title="D-day 제목"
      styleFor="styleDDWDDayPartTitle"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'DDayPartDDay'"
      title="D-day 일수"
      styleFor="styleDDWDDayPartDDay"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'DDayPartDate'"
      title="D-day 날짜"
      styleFor="styleDDWDDayPartDate"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'TimerPart'"
      title="타이머 배경"
      styleFor="styleDDWTimerPart"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'TimerPartNumber'"
      title="타이머 숫자"
      styleFor="styleDDWTimerPartNumber"
    ></StyleSettingForm>

    <StyleSettingForm
      v-if="getCurrentPage.split('-')[1] === 'TimerPartNumberString'"
      title="타이머 글자"
      styleFor="styleDDWTimerPartNumberString"
    ></StyleSettingForm>
  </BaseBox>
</template>

<script>
import StyleSettingForm from "@/components/d_day_widget/input/setting/form/StyleSettingForm.vue"
import { mapGetters } from "vuex"

export default {
  name: "StylesSetting",
  components: {
    StyleSettingForm,
  },
  computed: {
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>
