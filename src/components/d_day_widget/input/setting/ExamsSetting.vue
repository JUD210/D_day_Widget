<template>
  <BaseBox title="시험 정보">
    <ExamSettingForm
      v-for="(exam, index) in examsData"
      :key="index"
      :index="index"
      :title="`#${index + 1}`"
    ></ExamSettingForm>
    <button @click="addExam">+</button>
  </BaseBox>
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
  computed: mapState("exams", ["examsData"]),
}
</script>
