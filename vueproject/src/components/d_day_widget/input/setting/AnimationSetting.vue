<template>
  <BaseToggleBox title="Animation">
    <div class="inputForm">
      <div class="inputLine">
        <label>Type: </label>

        <select :value="type" @change="updateAnimationType">
          <option v-for="(type, index) in types" :value="type" :key="index">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="inputLine">
        <label>Speed: </label>
        <input
          type="number"
          min="1"
          :value="speed"
          @change="updateAnimationSpeed"
        /><span>&nbsp;sec</span>
      </div>

      <div class="inputLine">
        <label>Interval: </label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          :value="interval"
          @change="updateAnimationInterval"
        /><span>&nbsp;sec</span>
      </div>
    </div>
  </BaseToggleBox>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "AnimationSetting",
  methods: {
    ...mapActions("animation", [
      "updateAnimationType",
      "updateAnimationSpeed",
      "updateAnimationInterval",
    ]),
  },
  computed: mapState("animation", ["type", "speed", "interval", "types"]),
}
</script>
