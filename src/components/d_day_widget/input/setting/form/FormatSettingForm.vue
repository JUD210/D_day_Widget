<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <div class="inputLinesContainer">
      <div class="inputLine">
        <label>D-day 형식: </label>
        <select
          :value="formatDDay"
          @change="updateFormat($event, 'formatDDay')"
        >
          <option
            v-for="(format, index) in formatDDays"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>

      <div class="inputLine">
        <label>날짜 형식: </label>
        <select
          :value="formatDate"
          @change="updateFormat($event, 'formatDate')"
        >
          <option
            v-for="(format, index) in formatDates"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>

      <div class="inputLine">
        <label>타이머 글자 형식: </label>
        <select
          :value="formatTimerString"
          @change="updateFormat($event, 'formatTimerString')"
        >
          <option
            v-for="(format, index) in formatTimerStrings"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "FormatSettingForm",
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  methods: {
    updateFormat(event, attr) {
      this.$store.dispatch("formats/updateFormat", {
        attr: attr,
        value: event.target.value,
      })
    },
  },

  computed: mapState("formats", [
    "formatDDays",
    "formatDates",
    "formatTimerStrings",

    "formatDDay",
    "formatDate",
    "formatTimerString",
  ]),
}
</script>

<style scoped></style>
