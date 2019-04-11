<template>
  <BaseBox title="exam">
    <BaseToggleBox class="inputLinesContainer" :title="title" :index="index">
      <div class="inputLine">
        <label>제목</label>
        <input
          type="text"
          :value="getExamTitleById(index)"
          @change="updateExam($event, 'examTitle')"
          placeholder="시험명을 입력해주세요."
        />
      </div>

      <div class="inputLine">
        <label>날짜</label>
        <input
          type="date"
          :value="getExamDateById(index)"
          @change="updateExam($event, 'examDate')"
        />
      </div>
    </BaseToggleBox>
  </BaseBox>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ExamSettingForm",
  props: {
    title: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    updateExam(event, attr) {
      this.$store.dispatch("exams/updateExam", {
        index: this.index,
        attr: attr,
        value: event.target.value,
      })
    },
  },
  computed: mapGetters("exams", ["getExamTitleById", "getExamDateById"]),
}
</script>
