<template>
  <BaseToggleBox title="Style">
    <StyleForm title="Exam Title" styleFor="title"></StyleForm>
    <StyleForm title="Exam D-day" styleFor="dday"></StyleForm>
    <StyleForm title="Exam Date" styleFor="date"></StyleForm>
  </BaseToggleBox>
</template>

<script>
import StyleForm from '@/components/StyleForm.vue'

export default {
  name: 'StyleSetting',
  components: {
    StyleForm,
  },
}
</script>

<style scoped></style>
