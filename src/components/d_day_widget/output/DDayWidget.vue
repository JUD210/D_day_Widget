<template>
  <div class="dDayWidget">
    <div
      class="title"
      :style="[styleTitle, { 'font-size': `${styleTitle['font-size']}px` }]"
    >
      <span>{{ examTitleComputed }}</span>
    </div>

    <div
      class="dday"
      :style="[styleDDay, { 'font-size': `${styleDDay['font-size']}px` }]"
    >
      <div v-if="day >= 0 && hour >= 0 && min >= 0 && sec >= 0">
        <span>{{ formattedDDay }}</span>
      </div>

      <div v-else class="expired">
        <span>시간 경과</span>
      </div>
    </div>

    <div
      class="date"
      :style="[styleDate, { 'font-size': `${styleDate['font-size']}px` }]"
    >
      <span>{{ formattedDate }}</span>
    </div>

    <div class="timer">
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
        <span>시간 경과</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/DDayWidget.css"

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
    ...mapState("styles", ["styleTitle", "styleDDay", "styleDate"]),
    ...mapState("formats", ["formatDDay", "formatDate"]),
    ...mapState("animations", [
      "animationType",
      "animationTransition",
      "animationInterval",
    ]),

    examTitleComputed() {
      if (this.exams[this.indexSelector].examTitle) {
        return this.exams[this.indexSelector].examTitle
      } else {
        return "Sample"
      }
    },

    formattedDDay() {
      // !TODO: Custom Formatting 지원 (%d %dd %D %DD)
      // : CustomFormatInput.vue

      let fmDD = this.formatDDay
      fmDD = fmDD.substring(fmDD.indexOf("(") + 1, fmDD.indexOf(")"))

      // this.day is 'int' from timeUpdater
      let d = this.day + 1
      if (d < 10) {
        d = `0${d}`
      }

      try {
        if (/%dd/i.test(fmDD)) {
          fmDD = fmDD.replace(/%dd/i, d)
        } else if (/%d/i.test(fmDD)) {
          if (d < 10) {
            d = d.slice(1)
          }

          fmDD = fmDD.replace(/%d/i, d)
        } else {
          throw "포맷이 잘못되었습니다. %d 또는 %dd를 사용해주세요!"
        }
      } catch (error) {
        alert(error)
      }

      return fmDD
    },

    formattedDate() {
      // !TODO: Custom Formatting 지원 (yyyy yy mm m dd d)
      // : CustomFormatInput.vue

      let eD = this.exams[this.indexSelector].examDate.split(/-/)
      let y = eD[0]
      let m = eD[1]
      let d = eD[2]

      let fmD = this.formatDate
      fmD = fmD.substring(fmD.indexOf("(") + 1, fmD.indexOf(")"))

      try {
        if (/yyyy/.test(fmD)) {
          fmD = fmD.replace(/yyyy/, y)
        } else if (/yy/.test(fmD)) {
          fmD = fmD.replace(/yy/, y.slice(2))
        } else {
          throw "포맷이 잘못되었습니다. yyyy 또는 yy를 사용해주세요! (대문자만 사용 가능)"
        }
      } catch (error) {
        alert(`1${error}`)
      }

      try {
        if (/mm/.test(fmD)) {
          fmD = fmD.replace(/mm/, m)
        } else if (/m/.test(fmD)) {
          if (m < 10) {
            m = m.slice(1)
          }
          fmD = fmD.replace(/m/, m)
        } else {
          throw "포맷이 잘못되었습니다. mm 또는 m을 사용해주세요! (대문자만 사용 가능)"
        }
      } catch (error) {
        alert(`2${error}`)
      }

      try {
        if (/dd/.test(fmD)) {
          fmD = fmD.replace(/dd/, d)
        } else if (/d/.test(fmD)) {
          if (d < 10) {
            d = d.slice(1)
          }
          fmD = fmD.replace(/d/, d)
        } else {
          throw "포맷이 잘못되었습니다. dd 또는 d을 사용해주세요! (대문자만 사용 가능)"
        }
      } catch (error) {
        alert(`3${error}`)
      }

      return fmD
    },
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
    }, 5000)

    setInterval(() => {
      this.timeUpdater()
    }, 1000)
  },
}
</script>
