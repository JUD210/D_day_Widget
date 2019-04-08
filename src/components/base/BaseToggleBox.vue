<template>
  <div class="baseToggleBox">
    <div class="folder">
      <img
        class="folder-image"
        :class="{ folded: this.isOpen }"
        type="image"
        src="@/assets/image/down_arrow_in_circle.png"
        @click="changeIsOpen()"
      />

      &nbsp;

      <span class="folder-title" @click="changeIsOpen()">{{ title }}</span>

      <div v-if="title[0] == '#'" class="examController">
        <button @click="removeExam">-</button>
      </div>
    </div>

    <slot v-if="isOpen">DEBUG: fill the content!</slot>
  </div>
</template>

<script>
import "@/assets/css/base/BaseToggleBox.css"

export default {
  name: "BaseToggleBox",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    changeIsOpen() {
      this.isOpen = !this.isOpen
    },

    // this.index comes from ExamSettingForm
    removeExam() {
      this.$store.state.exams["examsData"].length != 1
        ? this.$store.dispatch("exams/removeExam", this.index)
        : alert("최소 한 개의 시험 데이터는 있어야 합니다!")
    },
  },
}
</script>
