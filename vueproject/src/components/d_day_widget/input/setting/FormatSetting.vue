<template>
  <BaseToggleBox title="Formatting">
    <div class="inputForm">
      <div class="inputLine">
        <label>D-day Format: </label>
        <select :value="dday" @change="updateFormatDDay">
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
        <select :value="date" @change="updateFormatDate">
          <option
            v-for="(format, index) in dateFormats"
            :value="format"
            :key="index"
            >{{ format }}</option
          >
        </select>
      </div>
    </div>
  </BaseToggleBox>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "FormatSetting",
  methods: {
    updateFormatDDay(event) {
      this.$store.dispatch("format/updateFormatDDay", event.target.value)
    },
    updateFormatDate(event) {
      this.$store.dispatch("format/updateFormatDate", event.target.value)
    },
  },
  computed: mapState("format", ["dday", "date", "ddayFormats", "dateFormats"]),
}
</script>
