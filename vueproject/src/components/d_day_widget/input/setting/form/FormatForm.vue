<template>
  <div class="inputForm">
    <div class="inputLine">
      <label>D-day Format: </label>
      <select :value="ddayFormat" @change="updateFormatDDay">
        <option
          v-for="(format, index) in ddayFormats"
          :value="format"
          :key="index"
          >{{ format }}</option
        >
      </select>
    </div>
    <div class="inputLine">
      <label>Date Format: </label>
      <select :value="dateFormat" @change="updateFormatDate">
        <option
          v-for="(format, index) in dateFormats"
          :value="format"
          :key="index"
          >{{ format }}</option
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
      this.$store.dispatch("format/updateFormatDDay", event.target.value)
    },
    updateFormatDate(event) {
      this.$store.dispatch("format/updateFormatDate", event.target.value)
    },
  },
  computed: mapState("format", [
    "ddayFormat",
    "dateFormat",
    "ddayFormats",
    "dateFormats",
  ]),
}
</script>

<style scoped></style>
