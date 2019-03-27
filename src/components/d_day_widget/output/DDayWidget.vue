<template>
  <transition :name="animationType">
    <div v-show="showWidget" class="dDayWidget">
      <div v-if="useDDWDDayPart" class="dDayPart" :style="styleDDWDDayPart">
        <div
          v-if="useDDWDDayPartTitle"
          class="title"
          :style="styleDDWDDayPartTitle"
        >
          <span>{{ examTitleComputed }}</span>
        </div>

        <div
          v-if="useDDWDDayPartDDay"
          class="dday"
          :style="styleDDWDDayPartDDay"
        >
          <span>{{ formattedDDay }}</span>
        </div>

        <div
          v-if="useDDWDDayPartDate"
          class="date"
          :style="styleDDWDDayPartDate"
        >
          <span>{{ formattedDate }}</span>
        </div>
      </div>

      <!-- ------------------------------- -->

      <div v-if="useDDWTimerPart" class="timerPart" :style="styleDDWTimerPart">
        <div class="day">
          <span
            v-if="useDDWTimerPartNumber"
            class="number"
            :style="styleDDWTimerPartNumber"
            >{{ day }}</span
          >
          <div
            v-if="useDDWTimerPartNumberString"
            class="number_str"
            :style="styleDDWTimerPartNumberString"
          >
            {{ formatTimerString.split("/")[0] }}
          </div>
        </div>

        <div class="hour">
          <span
            v-if="useDDWTimerPartNumber"
            class="number"
            :style="styleDDWTimerPartNumber"
            >{{ hour }}</span
          >
          <div
            v-if="useDDWTimerPartNumberString"
            class="number_str"
            :style="styleDDWTimerPartNumberString"
          >
            {{ formatTimerString.split("/")[1] }}
          </div>
        </div>

        <div class="min">
          <span
            v-if="useDDWTimerPartNumber"
            class="number"
            :style="styleDDWTimerPartNumber"
            >{{ min }}</span
          >
          <div
            v-if="useDDWTimerPartNumberString"
            class="number_str"
            :style="styleDDWTimerPartNumberString"
          >
            {{ formatTimerString.split("/")[2] }}
          </div>
        </div>

        <div class="sec">
          <span
            v-if="useDDWTimerPartNumber"
            class="number"
            :style="styleDDWTimerPartNumber"
            >{{ sec }}</span
          >
          <div
            v-if="useDDWTimerPartNumberString"
            class="number_str"
            :style="styleDDWTimerPartNumberString"
          >
            {{ formatTimerString.split("/")[3] }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import "@/assets/css/d_day_widget/DDayWidget.css"

import { mapState, mapGetters } from "vuex"
import { setInterval, setTimeout } from "timers"

export default {
  components: {},

  data() {
    return {
      timeDistance: 0,

      day: "",
      hour: "",
      min: "",
      sec: "",

      showWidget: true,
    }
  },

  computed: {
    ...mapState("uniqueId", ["uniqueId"]),

    ...mapState("exams", ["examsData", "__indexSelector"]),
    ...mapState("onOffSwitches", [
      "useDDWDDayPart",
      "useDDWDDayPartTitle",
      "useDDWDDayPartDDay",
      "useDDWDDayPartDate",
      "useDDWTimerPart",
      "useDDWTimerPartNumber",
      "useDDWTimerPartNumberString",
    ]),
    ...mapState("styles", [
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
      "animationDuration",
      "animationInterval",
      "__isIntervalChanged",
    ]),

    ...mapGetters("animations", ["getAnimationObject"]),

    examTitleComputed() {
      if (this.examsData[this.__indexSelector].examTitle) {
        return this.examsData[this.__indexSelector].examTitle
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

      let d = 0

      this.timeDistance >= 0 ? (d = this.day + 1) : (d = this.day)
      if (d < 10) {
        d = `0${d}`
      }

      try {
        if (/%dd/i.test(fmDD)) {
          this.timeDistance > 0
            ? (fmDD = fmDD.replace(/%dd/i, `-${d}`))
            : (fmDD = fmDD.replace(/%dd/i, `+${d}`))
        } else if (/%d/i.test(fmDD)) {
          if (d < 10) {
            d = d.slice(1)
          }
          this.timeDistance > 0
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

      let eD = this.examsData[this.__indexSelector].examDate.split(/-/)
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
      if (this.__indexSelector + 1 < this.examsData.length) {
        this.$store.dispatch("exams/updateIndexSelector", "next")
      } else {
        this.$store.dispatch("exams/updateIndexSelector", "reset")
      }
    },

    timeUpdater() {
      const KOREAN_TIME = 1000 * 60 * 60 * 9

      let now = new Date().getTime() + KOREAN_TIME

      let timeDistance =
        new Date(this.examsData[this.__indexSelector].examDate) - now
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
    var activateAnimation = 0

    setInterval(() => {
      if (this.__isIntervalChanged) {
        // console.log("IN setInterval")
        // console.log(this.animationInterval)

        // I don't know why but, vue imports "timers" to use setInterval().
        // The imported setInterval() returns an Object not a integer
        // {"_id": integer}
        window.clearInterval(activateAnimation["_id"])

        activateAnimation = setInterval(() => {
          // console.log("IN activateAnimation")
          // console.log(this.animationInterval)

          this.indexSelectorUpdater()

          // @T Need to change interval to some meaningful input value
          if (
            [
              "fade",
              "fade-short",
              "fade-long",
              "fade-strong",
              "fade-short-strong",
              "fade-long-strong",
            ].includes(this.animationType)
          ) {
            this.showWidget = false
            setTimeout(() => {
              this.showWidget = true
            }, 100)
          } else if (["slide", "slide-fade"].includes(this.animationType)) {
            this.showWidget = false
            setTimeout(() => {
              this.showWidget = true
            }, 100)
          }
        }, this.animationInterval * 1000)

        this.$store.dispatch("animations/updateIsIntervalChanged", false)
      }
    }, 1)

    setInterval(() => {
      this.timeUpdater()
    }, 1)

    setTimeout(() => {
      this.$store.dispatch("animations/updateIsIntervalChanged", true)
    }, 1000)
  },
}
</script>
