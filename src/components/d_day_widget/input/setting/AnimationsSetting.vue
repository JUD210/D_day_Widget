<template>
  <BaseBox
    v-if="getCurrentPage.split('-')[0] === 'Animations'"
    title="애니메이션"
  >
    <AnimationSettingForm title="날짜 전환"></AnimationSettingForm>
  </BaseBox>
</template>

<script>
import AnimationSettingForm from "@/components/d_day_widget/input/setting/form/AnimationSettingForm.vue"

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
