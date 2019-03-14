<template>
  <div class="inputForm">
    <div class="inputLine">
      <label>D-day Format: </label>
      <select :value="formatDDay" @change="upformatDateDDay">
        <option
          v-for="(formats, index) in formatDDays"
          :value="formats"
          :key="index"
          >{{ formats }}</option
        >
      </select>
    </div>
    <div class="inputLine">
      <label>Date Format: </label>
      <select :value="formatDate" @change="upformatDateDate">
        <option
          v-for="(formats, index) in formatDates"
          :value="formats"
          :key="index"
          >{{ formats }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  methods: {
    upformatDateDDay(event) {
      this.$store.dispatch("formats/upformatDateDDay", event.target.value)
    },
    upformatDateDate(event) {
      this.$store.dispatch("formats/upformatDateDate", event.target.value)
    },
  },
  computed: mapState("formats", [
    "formatDDay",
    "formatDate",
    "formatDDays",
    "formatDates",
  ]),
}
</script>

<style scoped></style>
