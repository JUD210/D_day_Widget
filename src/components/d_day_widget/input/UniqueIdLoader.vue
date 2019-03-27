<template>
  <div class="unique_id_loader">
    <h2>저장한 위젯 불러오기 (키 값)</h2>
    <button @click="createUniqueId">New</button>
    <input type="text" :value="uniqueId" @change="updateUniqueId" />
    <button @click="loadWidgetData">Load</button>
    <p>
      위젯이 제대로 작동하지 않을 경우<br />
      새로고침을 해주세요!
    </p>
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

<style>
p {
  text-align: center;
}
</style>
