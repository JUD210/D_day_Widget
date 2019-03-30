<template>
  <BaseBox v-if="getCurrentPage.split('-')[0] === 'Exams'" title="시험 정보">
    <ExamSettingForm
      v-for="(exam, index) in examsData"
      :key="index"
      :index="index"
      :title="`#${index + 1}`"
    ></ExamSettingForm>

    <button class="addExamBtn" @click="addExam">+</button>
  </BaseBox>
</template>

<script>
import ExamSettingForm from "@/components/d_day_widget/input/setting/form/ExamSettingForm.vue"
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  name: "ExamsSetting",
  components: {
    ExamSettingForm,
  },
  methods: { ...mapActions("exams", ["addExam"]) },
  computed: {
    ...mapState("exams", ["examsData"]),
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
}
</script>

<style>
.addExamBtn {
  margin: 10px;
}
</style>
