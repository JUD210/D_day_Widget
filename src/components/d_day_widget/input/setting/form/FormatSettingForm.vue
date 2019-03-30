<template>
  <BaseBox class="inputForm" :title="title">
    <div class="inputLinesContainer">
      <div class="inputLine">
        <label>D-day 형식</label>
        <select
          :value="formatDDay"
          @change="updateFormat($event, 'formatDDay')"
        >
          <option
            v-for="(format, index) in __formatDDays"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>

      <div class="inputLine">
        <label>날짜 형식</label>
        <select
          :value="formatDate"
          @change="updateFormat($event, 'formatDate')"
        >
          <option
            v-for="(format, index) in __formatDates"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>

      <div class="inputLine">
        <label>타이머 글자 형식</label>
        <select
          :value="formatTimerString"
          @change="updateFormat($event, 'formatTimerString')"
        >
          <option
            v-for="(format, index) in __formatTimerStrings"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>
    </div>
  </BaseBox>
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
    "__formatDDays",
    "__formatDates",
    "__formatTimerStrings",

    "formatDDay",
    "formatDate",
    "formatTimerString",
  ]),
}
</script>

<style scoped></style>
