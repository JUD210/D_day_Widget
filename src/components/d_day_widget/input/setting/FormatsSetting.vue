<template>
  <BaseToggleBox title="글자 형식 설정">
    <FormatSettingForm></FormatSettingForm>
  </BaseToggleBox>
</template>

<script>
import FormatSettingForm from "@/components/d_day_widget/input/setting/form/FormatSettingForm.vue"

export default {
  name: "FormatsSetting",
  components: {
    FormatSettingForm,
  },
}
</script>
