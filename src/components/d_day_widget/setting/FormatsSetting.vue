<template>
  <BaseBoxContainer
    v-if="getCurrentPage.split('-')[0] === 'Formats'"
    title="글자 형식"
  >
    <FormatSettingForm title="형식"></FormatSettingForm>
  </BaseBoxContainer>
</template>

<script>
import FormatSettingForm from "@/components/d_day_widget/setting/form/FormatSettingForm.vue"

import { mapGetters } from "vuex"

export default {
  name: "FormatsSetting",
  components: {
    FormatSettingForm,
  },
  computed: {
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>
