<template>
  <div>
    <h2>저장한 위젯 불러오기 (키 값)</h2>
    <input type="text" :value="uniqueId" @change="updateUniqueId" />
    <button @click="createUniqueId">New</button>
    <button @click="loadWidgetData">Load</button>
    <!-- // !TODO: Reset Button -->
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
      this.$store.commit("CREATE_UNIQUE_ID")
    },
    updateUniqueId(e) {
      this.$store.commit("UPDATE_UNIQUE_ID", e.target.value)
    },
  },
  computed: mapState(["uniqueId"]),
  created() {
    this.$store.commit("CREATE_UNIQUE_ID")
  },
}
</script>
