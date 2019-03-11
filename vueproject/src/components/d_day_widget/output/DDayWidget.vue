<template>
  <div class="dDayWidget">
    <!-- //!TODO: 1초마다 새로운 D-day 값 읽어서 타이머 그리기 -->
    <!-- //!TODO: Animaion, CSS 등... 추가! -->

    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="time">
      <div class="day">
        <div>{{ day }}</div>
        <span>일</span>
      </div>
      <div class="hour">
        <div>{{ hour }}</div>
        <span>시</span>
      </div>
      <div class="min">
        <div>{{ min }}</div>
        <span>분</span>
      </div>
      <div class="sec">
        <div>{{ sec }}</div>
        <span>초</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { setInterval } from "timers"

export default {
  data() {
    return {
      indexSelector: 0,

      title: "",
      day: "",
      hour: "",
      min: "",
      sec: "",
    }
  },
  computed: {
    ...mapState(["uniqueId", "exams", "format", "style", "animation"]),
  },
  methods: {
    indexSelectorUpdater() {
      if (this.indexSelector + 1 < this.exams.exams.length) {
        this.indexSelector += 1
      } else {
        this.indexSelector = 0
      }
    },

    titleUpdater() {
      this.title = this.exams.exams[this.indexSelector].title
    },
    timeUpdater() {
      const KOREAN_TIME = 1000 * 60 * 60 * 9

      let now = new Date().getTime() + KOREAN_TIME

      let distance = new Date(this.exams.exams[this.indexSelector].date) - now

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
      this.titleUpdater()
    }, 3000)

    setInterval(() => {
      this.timeUpdater()
    }, 1000)
  },
}
</script>

<style scoped>
.dDayWidget {
  width: 500px;
  height: 500px;
  background-color: #fafafa;
}

.title {
  font-size: 60px;
  font-weight: 500;
  text-align: center;
  margin: 0 5px;
}

/* //!TODO: 가운데 정렬, 경계선 만들기, 배경 채우기, ... */
.timer {
  display: inline-block;

  text-align: center;
}

.day,
.hour,
.min,
.sec {
  font-size: 50px;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  margin: 0 5px;
}
</style>
