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
          @change="updateTitle"
        />
      </div>

      <div class="inputLine">
        <label>Date: </label>
        <input
          type="date"
          :value="getExamDateById(index)"
          @change="updateDate"
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
    removeExam() {
      this.$store.commit("REMOVE_EXAM", this.index)
    },
    updateTitle(e) {
      this.$store.commit("UPDATE_EXAM_TITLE", {
        index: this.index,
        title: e.target.value,
      })
    },
    updateDate(e) {
      this.$store.commit("UPDATE_EXAM_DATE", {
        index: this.index,
        date: e.target.value,
      })
    },
  },
  computed: mapGetters(["getExamTitleById", "getExamDateById"]),
}
</script>

<style scoped></style>
