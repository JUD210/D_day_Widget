<template>
  <div class="inputForm">
    <div class="inputLine">
      <label>Type: </label>
      <select :value="animationType" @change="updateAnimationType">
        <option
          v-for="(animationType, index) in animationTypes"
          :value="animationType"
          :key="index"
        >
          {{ animationType }}
        </option>
      </select>
    </div>

    <div class="inputLine">
      <label>Transition: </label>
      <input
        type="number"
        min="0.1"
        step="0.1"
        :value="animationTransition"
        @change="updateAnimationTransition"
      /><span>&nbsp;sec</span>
    </div>

    <div class="inputLine">
      <label>Interval: </label>
      <input
        type="number"
        min="0.1"
        step="0.1"
        :value="animationInterval"
        @change="updateAnimationInterval"
      /><span>&nbsp;sec</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "AnimationForm",
  methods: {
    ...mapActions("animations", [
      "updateAnimationType",
      "updateAnimationTransition",
      "updateAnimationInterval",
    ]),
  },
  computed: mapState("animations", [
    "animationType",
    "animationTransition",
    "animationInterval",
    "animationTypes",
  ]),
}
</script>

<style scoped></style>
