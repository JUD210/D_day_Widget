<template>
  <div class="inputForm">
    <div class="inputLine">
      <label>D-day Format: </label>
      <select :value="formatDDay" @change="updateFormat($event, 'formatDDay')">
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
      <select :value="formatDate" @change="updateFormat($event, 'formatDate')">
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
    updateFormat(event, attr) {
      this.$store.dispatch("formats/updateFormat", {
        attr: attr,
        value: event.target.value,
      })
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
