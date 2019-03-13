<template>
  <div class="dDayWidget">
    <!-- //!TODO: Animaion, CSS 등... 추가! -->

    <div class="title">
      <span>{{ examTitle }}</span>
    </div>

    <!-- If D-Day_widget -->
    <div class="time">
      <div v-if="day >= 0 && hour >= 0 && min >= 0 && sec >= 0">
        <div class="day">
          <span class="number">D-{{ day + 1 }}</span>
        </div>
      </div>

      <div v-else class="expired">
        시간 경과
      </div>
    </div>

    <!-- If Timer_widget -->
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
  data() {
    return {
      indexSelector: 0,

      examTitle: "",

      day: "",
      hour: "",
      min: "",
      sec: "",
    }
  },

  // !TODO: It's NOT!
  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    ...mapState("exams", ["exams"]),
    ...mapState("format", ["dday, date"]),
    ...mapState("style", ["title, dday, date"]),
    ...mapState("animation", ["type", "transition", "interval"]),
  },

  methods: {
    indexSelectorUpdater() {
      if (this.indexSelector + 1 < this.exams.length) {
        this.indexSelector += 1
      } else {
        this.indexSelector = 0
      }
    },

    titleUpdater() {
      this.examTitle = this.exams[this.indexSelector].title
    },
    timeUpdater() {
      const KOREAN_TIME = 1000 * 60 * 60 * 9

      let now = new Date().getTime() + KOREAN_TIME

      let distance = new Date(this.exams[this.indexSelector].date) - now

      this.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      this.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.sec = Math.floor((distance % (1000 * 60)) / 1000)
    },
  },

  created() {
    console.log(
      this.uniqueId,
      this.exams,
      this.format,
      this.style,
      this.animation,
    )
  },

  mounted() {
    setInterval(() => {
      this.indexSelectorUpdater()
      this.titleUpdater()
    }, 3000)

    setInterval(() => {
      this.timeUpdater()
    }, 1000)
  },
}
</script>
