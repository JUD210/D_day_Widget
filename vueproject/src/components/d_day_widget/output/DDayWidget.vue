<template>
  <div class="dDayWidget">
    <!-- //!TODO: Animaion, CSS 등... 추가! -->

    <div class="title">
      <span>{{ exams[indexSelector].examTitle }}</span>
    </div>

    <!-- If D-Day_widget -->
    <div class="dday">
      <div v-if="day >= 0 && hour >= 0 && min >= 0 && sec >= 0">
        <div class="day">
          <span class="number">D-{{ day + 1 }}</span>
        </div>
      </div>

      <div v-else class="expired">
        시간 경과
      </div>
    </div>

    <!-- Timer_widget Sample -->
    <div class="time">
      <div v-if="day >= 0 && hour >= 0 && min >= 0 && sec >= 0">
        <div class="day">
          <span class="number">{{ day }}</span>
          <div class="number_str">일</div>
        </div>

        <div class="hour">
          <span class="number">{{ hour }}</span>
          <div class="number_str">시</div>
        </div>

        <div class="min">
          <span class="number">{{ min }}</span>
          <div class="number_str">분</div>
        </div>

        <div class="sec">
          <span class="number">{{ sec }}</span>
          <div class="number_str">초</div>
        </div>
      </div>

      <div v-else class="expired">
        시간 경과
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/CHANGETOPRESET.css"

import { mapState } from "vuex"
import { setInterval } from "timers"

export default {
  components: {},

  data() {
    return {
      indexSelector: 0,

      day: "",
      hour: "",
      min: "",
      sec: "",
    }
  },

  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    ...mapState("exams", ["exams"]),
    ...mapState("formats", ["formatDDay", "formatDate"]),
    ...mapState("styles", ["styleTitle", "styleDDay", "styleDate"]),
    ...mapState("animations", [
      "animationType",
      "animationTransition",
      "animationInterval",
    ]),
  },

  methods: {
    indexSelectorUpdater() {
      if (this.indexSelector + 1 < this.exams.length) {
        this.indexSelector += 1
      } else {
        this.indexSelector = 0
      }
    },

    timeUpdater() {
      const KOREAN_TIME = 1000 * 60 * 60 * 9

      let now = new Date().getTime() + KOREAN_TIME

      let distance = new Date(this.exams[this.indexSelector].examDate) - now

      this.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      this.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.sec = Math.floor((distance % (1000 * 60)) / 1000)
    },
  },

  mounted() {
    setInterval(() => {
      this.indexSelectorUpdater()
    }, 3000)

    setInterval(() => {
      this.timeUpdater()
    }, 1000)

    setInterval(() => {
      console.log(this.exams)
    }, 1000)
  },
}
</script>
