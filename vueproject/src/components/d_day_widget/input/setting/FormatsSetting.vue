<template>
  <BaseToggleBox title="Formatting">
    <FormatForm></FormatForm>
  </BaseToggleBox>
</template>

<script>
import FormatForm from "@/components/d_day_widget/input/setting/form/FormatForm.vue"

export default {
  name: "FormatsSetting",
  components: {
    FormatForm,
  },
}
</script>
