<template>
  <div>
    <h2>Loader</h2>
    <input type="text" :value="uniqueId" @change="updateUniqueId" />
    <button @click="newUniqueId">New</button>
    <button @click="loadWidgetData">Load</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UniqueIdLoader',
  methods: {
    ...mapActions(['loadWidgetData']),
    newUniqueId() {
      this.$store.commit('NEW_UNIQUE_ID')
    },
    updateUniqueId(e) {
      this.$store.commit('UPDATE_UNIQUE_ID', e.target.value)
    },
  },
  computed: mapState(['uniqueId']),
  created() {
    this.$store.commit('NEW_UNIQUE_ID')
  },
}
</script>

<style scoped></style>
