<template>
  <div class="dDayWidget" :style="styleDDW">
    <div class="dDayPart" :style="styleDDWDDayPart">
      <div class="title" :style="styleDDWDDayPartTitle">
        <span>{{ examTitleComputed }}</span>
      </div>

      <div class="dday" :style="styleDDWDDayPartDDay">
        <span>{{ formattedDDay }}</span>
      </div>

      <div class="date" :style="styleDDWDDayPartDate">
        <span>{{ formattedDate }}</span>
      </div>
    </div>

    <!-- ------------------------------- -->

    <div class="timerPart" :style="styleDDWTimerPart">
      <div class="day">
        <span class="number" :style="styleDDWTimerPartNumber">{{ day }}</span>
        <div
          v-if="formatTimerString != 'None'"
          class="number_str"
          :style="styleDDWTimerPartNumberString"
        >
          {{ formatTimerString.split("/")[0] }}
        </div>
      </div>

      <div class="hour">
        <span class="number" :style="styleDDWTimerPartNumber">{{ hour }}</span>
        <div
          v-if="formatTimerString != 'None'"
          class="number_str"
          :style="styleDDWTimerPartNumberString"
        >
          {{ formatTimerString.split("/")[1] }}
        </div>
      </div>

      <div class="min">
        <span class="number" :style="styleDDWTimerPartNumber">{{ min }}</span>
        <div
          v-if="formatTimerString != 'None'"
          class="number_str"
          :style="styleDDWTimerPartNumberString"
        >
          {{ formatTimerString.split("/")[2] }}
        </div>
      </div>

      <div class="sec">
        <span class="number" :style="styleDDWTimerPartNumber">{{ sec }}</span>
        <div
          v-if="formatTimerString != 'None'"
          class="number_str"
          :style="styleDDWTimerPartNumberString"
        >
          {{ formatTimerString.split("/")[3] }}
        </div>
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
      timeDistance: 0,

      day: "",
      hour: "",
      min: "",
      sec: "",
    }
  },

  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    ...mapState("exams", ["exams", "indexSelector"]),
    ...mapState("styles", [
      "styleDDW",
      "styleDDWDDayPart",
      "styleDDWDDayPartTitle",
      "styleDDWDDayPartDDay",
      "styleDDWDDayPartDate",
      "styleDDWTimerPart",
      "styleDDWTimerPartNumber",
      "styleDDWTimerPartNumberString",
    ]),
    ...mapState("formats", ["formatDDay", "formatDate", "formatTimerString"]),
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

    // ! @T CONTINUE

    formattedDDay() {
      // @T add: Custom Formatting (%d %dd %D %DD)
      // : CustomFormatInput.vue
      let fmDD = this.formatDDay
      fmDD = fmDD
        .substring(fmDD.indexOf("(") + 1, fmDD.indexOf(")"))
        .replace("-", "")

      // this.day is 'int' from timeUpdater
      let d = 0
      this.timeDistance >= 0 ? (d = this.day + 1) : (d = this.day)
      if (d < 10) {
        d = `0${d}`
      }

      try {
        if (/%dd/i.test(fmDD)) {
          this.timeDistance >= 0
            ? (fmDD = fmDD.replace(/%dd/i, `-${d}`))
            : (fmDD = fmDD.replace(/%dd/i, `+${d}`))
        } else if (/%d/i.test(fmDD)) {
          if (d < 10) {
            d = d.slice(1)
          }
          this.timeDistance >= 0
            ? (fmDD = fmDD.replace(/%d/i, `-${d}`))
            : (fmDD = fmDD.replace(/%d/i, `+${d}`))
        } else {
          throw "포맷이 잘못되었습니다. %d 또는 %dd를 사용해주세요!"
        }
      } catch (error) {
        alert(error)
      }

      return fmDD
    },

    formattedDate() {
      // @T add: Custom Formatting (yyyy yy mm m dd d)
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
        this.$store.dispatch("exams/updateIndexSelector", "next")
      } else {
        this.$store.dispatch("exams/updateIndexSelector", "reset")
      }
    },

    timeUpdater() {
      const KOREAN_TIME = 1000 * 60 * 60 * 9

      let now = new Date().getTime() + KOREAN_TIME

      let timeDistance = new Date(this.exams[this.indexSelector].examDate) - now
      this.timeDistance = timeDistance

      let day = Math.floor(timeDistance / (1000 * 60 * 60 * 24))
      let hour = Math.floor(
        (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )

      let min = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60))
      let sec = Math.floor((timeDistance % (1000 * 60)) / 1000)

      day >= 0 ? (this.day = day) : (this.day = -day - 1)
      hour >= 0 ? (this.hour = hour) : (this.hour = -hour - 1)
      min >= 0 ? (this.min = min) : (this.min = -min - 1)
      sec >= 0 ? (this.sec = sec) : (this.sec = -sec - 1)
    },
  },

  mounted() {
    setInterval(() => {
      // ! @T CONTINUE!
      console.log(this.animationInterval)
      this.indexSelectorUpdater()
    }, this.animationInterval * 1000)

    setInterval(() => {
      this.timeUpdater()
    }, 1000)
  },
}
</script>
