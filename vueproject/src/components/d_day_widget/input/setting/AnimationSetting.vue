<template>
  <BaseToggleBox title="Animation">
    <div>
      <label>Animation Type: </label>
      <select :value="type" @change="updateType">
        <option v-for="(type, index) in types" :value="type" :key="index">
          {{ type }}
        </option>
      </select>
    </div>
    <div>
      <label>Animation Speed: </label>
      <input type="number" min="1" :value="speed" @change="updateSpeed" />m/s
    </div>
    <div>
      <label>Animation Interval: </label>
      <input
        type="number"
        min="0.1"
        step="0.1"
        :value="interval"
        @change="updateInterval"
      />m/s
    </div>
  </BaseToggleBox>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "AnimationSetting",
  methods: {
    updateType(e) {
      this.$store.commit("UPDATE_ANIMATION_TYPE", e.target.value)
    },
    updateSpeed(e) {
      this.$store.commit("UPDATE_ANIMATION_SPEED", e.target.value)
    },
    updateInterval(e) {
      this.$store.commit("UPDATE_ANIMATION_INTERVAL", e.target.value)
    },
  },
  computed: mapState({
    type: state => state.animation.type,
    speed: state => state.animation.speed,
    interval: state => state.animation.interval,
    types: state => state.animation.types,
  }),
}
</script>

<style scoped></style>
