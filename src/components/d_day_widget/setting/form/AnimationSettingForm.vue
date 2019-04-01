<template>
  <BaseBox :title="title">
    <BaseToggleBox class="inputLinesContainer">
      <div class="inputLine">
        <label>애니메이션 종류</label>
        <select
          :value="animationType"
          @change="updateAnimation($event, 'animationType')"
        >
          <option
            v-for="(animationType, index) in __animationTypes"
            :value="animationType"
            :key="index"
          >
            {{ animationType }}
          </option>
        </select>
      </div>

      <div class="inputLine">
        <label>날짜 전환 주기 (초)</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          :value="Number(animationInterval)"
          @change="updateAnimation($event, 'animationInterval')"
          placeholder="날짜 전환 주기를 입력해주세요."
        />
      </div>
    </BaseToggleBox>
  </BaseBox>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: "AnimationSettingForm",
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  methods: {
    updateAnimation(event, attr) {
      this.$store.dispatch("animations/updateAnimation", {
        attr: attr,
        value: event.target.value,
      })
    },
  },

  computed: {
    ...mapState("animations", [
      "animationType",
      "animationDuration",
      "animationInterval",
      "__animationTypes",
    ]),
    ...mapGetters("animations", ["getAnimationAttr"]),
  },
}
</script>
