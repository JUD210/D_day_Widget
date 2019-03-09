<template>
  <div>
    <button @click="test(getWidgetData)">!!TEST!!</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  methods: {
    test(data) {
      console.log(data)
    },
  },
  computed: {
    ...mapGetters(["getWidgetData"]),
  },
}
</script>

<style scoped></style>
