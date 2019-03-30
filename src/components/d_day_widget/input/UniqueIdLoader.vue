<template>
  <div class="unique_id_loader">
    <h2>저장한 위젯 불러오기<br /></h2>
    <h3>(키 값 입력)</h3>
    <button @click="createUniqueId">New</button>
    <input type="text" :value="uniqueId" @change="updateUniqueId" />
    <button @click="reloadWithLoading">Load</button>

    <!-- // @T add: Reset Btn -->
    <!-- <button @click="">Reset</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "UniqueIdLoader",
  methods: {
    reloadWithLoading() {
      localStorage["requireReloadWhenLoading"] = "yes"
      this.$store.dispatch("loadWidgetData")
    },
    createUniqueId() {
      localStorage.removeItem("uniqueId")
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
