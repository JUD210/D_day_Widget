<template>
  <BaseToggleBox class="toggleBox" title="시험 정보">
    <ExamSettingForm
      v-for="(exam, index) in exams"
      :key="index"
      :index="index"
      :title="`#${index + 1}`"
    ></ExamSettingForm>
    <button @click="addExam">+</button>
  </BaseToggleBox>
</template>

<script>
import ExamSettingForm from "@/components/d_day_widget/input/setting/form/ExamSettingForm.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "ExamsSetting",
  components: {
    ExamSettingForm,
  },
  methods: mapActions("exams", ["addExam"]),
  computed: mapState("exams", ["exams"]),
}
</script>
