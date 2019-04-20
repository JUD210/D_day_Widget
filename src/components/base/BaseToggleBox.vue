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

      <div v-if="title[0] == '#'" class="exam-controller">
        <button
          v-if="index != 0"
          class="order-exam-btn"
          @click="orderExam('up')"
        >
          ↑
        </button>
        <button
          v-if="index != examsData.length - 1"
          class="order-exam-btn"
          @click="orderExam('down')"
        >
          ↓
        </button>
      </div>
    </div>

    <button class="remove-exam-btn" @click="removeExam">-</button>

    <slot v-if="isOpen">DEBUG: fill the content!</slot>
  </div>
</template>

<script>
import "@/assets/css/base/BaseToggleBox.css"
import { mapState } from "vuex"

export default {
  name: "BaseToggleBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 9999,
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

    removeExam() {
      this.$store.state.exams["examsData"].length != 1
        ? this.$store.dispatch("exams/removeExam", this.index)
        : alert("최소 한 개의 시험 데이터는 있어야 합니다!")
    },

    orderExam(cmd) {
      this.$store.dispatch("exams/orderExam", {
        cmd: cmd,
        currentIndex: this.index,
      })
    },
  },

  computed: {
    ...mapState("exams", ["examsData"]),
  },
}
</script>
