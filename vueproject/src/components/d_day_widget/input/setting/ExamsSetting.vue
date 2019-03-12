<template>
  <BaseToggleBox title="Exams">
    <ExamForm
      v-for="(exam, index) in exams"
      :key="index"
      :index="index"
    ></ExamForm>
    <button @click="addExam">+</button>
  </BaseToggleBox>
</template>

<script>
import ExamForm from "@/components/d_day_widget/input/setting/form/ExamForm.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "ExamsSetting",
  components: {
    ExamForm,
  },
  methods: mapActions(["addExam"]),
  computed: mapState({
    exams: state => state.exams.exams,
  }),
}
</script>
