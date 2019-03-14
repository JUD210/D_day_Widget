<template>
  <div>
    <div class="inputForm">
      <div>
        <h3>
          Exam #{{ index }}
          <button @click="removeExam">-</button>
        </h3>
      </div>

      <div class="inputLine">
        <label>Title: </label>
        <input
          type="text"
          :value="getExamTitleById(index)"
          @change="updateExam($event, 'examTitle')"
          placeholder="시험명을 입력해주세요."
        />
      </div>

      <div class="inputLine">
        <label>Date: </label>
        <input
          type="date"
          :value="getExamDateById(index)"
          @change="updateExam($event, 'examDate')"
        />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ExamForm",
  props: {
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
        data: event.target.value,
      })
    },

    removeExam() {
      this.$store.dispatch("exams/removeExam", this.index)
    },
  },
  computed: mapGetters("exams", ["getExamTitleById", "getExamDateById"]),
}
</script>
