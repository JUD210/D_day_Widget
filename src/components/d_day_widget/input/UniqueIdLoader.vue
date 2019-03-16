<template>
  <div>
    <h2>저장한 위젯 불러오기 (키 값)</h2>
    <input type="text" :value="uniqueId" @change="updateUniqueId" />
    <button @click="createUniqueId">New</button>
    <button @click="loadWidgetData">Load</button>
    <!-- // @T add: Reset Button -->
    <!-- <button @click="">Reset</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "UniqueIdLoader",
  methods: {
    ...mapActions(["loadWidgetData"]),
    createUniqueId() {
      this.$store.dispatch("uniqueId/createUniqueId")
    },
    updateUniqueId(event) {
      this.$store.dispatch("uniqueId/updateUniqueId", event.target.value)
    },
  },
  computed: mapState("uniqueId", ["uniqueId"]),
  created() {
    this.$store.dispatch("uniqueId/createUniqueId")
  },
}
</script>
