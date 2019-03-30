<!-- //@T take back below from BaseBox v-if
    <span class="examController">
      <button @click="removeExam">-</button>
    </span> 
  -->

<template>
  <div class="inputForm">
    <BaseToggleBox class="inputLinesContainer" :title="title">
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
  </div>
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

<style scoped>
h3 {
  margin: 0;
  margin-right: 15px;
}
.examController {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
