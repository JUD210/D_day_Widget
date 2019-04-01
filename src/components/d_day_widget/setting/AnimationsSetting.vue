<template>
  <BaseBoxContainer
    v-if="getCurrentPage.split('-')[0] === 'Animations'"
    title="애니메이션"
  >
    <AnimationSettingForm title="날짜 전환"></AnimationSettingForm>
  </BaseBoxContainer>
</template>

<script>
import AnimationSettingForm from "@/components/d_day_widget/setting/form/AnimationSettingForm.vue"

import { mapGetters } from "vuex"

export default {
  name: "AnimationsSetting",
  components: {
    AnimationSettingForm,
  },
  computed: {
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>
