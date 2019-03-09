<template>
  <BaseToggleBox title="Formatting">
    <div class="inputForm">
      <div class="inputLine">
        <label>D-day Format: </label>
        <select :value="dday" @change="updateDday">
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
        <select :value="date" @change="updateDate">
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
    updateDday(e) {
      this.$store.commit("UPDATE_FORMAT_DDAY", e.target.value)
    },
    updateDate(e) {
      this.$store.commit("UPDATE_FORMAT_DATE", e.target.value)
    },
  },
  computed: mapState({
    dday: state => state.format.dday,
    date: state => state.format.date,
    ddayFormats: state => state.format.ddayFormats,
    dateFormats: state => state.format.dateFormats,
  }),
}
</script>

<style scoped></style>
