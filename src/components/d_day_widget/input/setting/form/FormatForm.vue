<template>
  <div class="inputForm">
    <div class="inputLine">
      <label>D-day Format: </label>
      <select :value="formatDDay" @change="updateFormatDDay">
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
      <select :value="formatDate" @change="updateFormatDate">
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
    updateFormatDDay(event) {
      this.$store.dispatch("formats/updateFormatDDay", event.target.value)
    },
    updateFormatDate(event) {
      this.$store.dispatch("formats/updateFormatDate", event.target.value)
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
