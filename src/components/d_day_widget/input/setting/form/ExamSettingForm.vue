<template>
  <div>
    <div class="inputForm">
      <div>
        <h3>{{ title }}</h3>
        <button @click="removeExam">-</button>
      </div>

      <div class="inputLinesContainer">
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
      </div>
    </div>
    <br />
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

    removeExam() {
      this.$store.dispatch("exams/removeExam", this.index)
    },
  },
  computed: mapGetters("exams", ["getExamTitleById", "getExamDateById"]),
}
</script>

<style scoped>
h3 {
  display: inline;
}
</style>
