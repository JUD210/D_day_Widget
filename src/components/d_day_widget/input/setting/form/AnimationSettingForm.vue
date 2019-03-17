<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <div class="inputLinesContainer">
      <div class="inputLine">
        <label>애니메이션 종류</label>
        <select
          :value="animationType"
          @change="updateAnimation($event, 'animationType')"
        >
          <option
            v-for="(animationType, index) in animationTypes"
            :value="animationType"
            :key="index"
          >
            {{ animationType }}
          </option>
        </select>
      </div>

      <!-- // @T CONTINUE! -->
      <!-- <div class="inputLine">
        <label>?애니메이션 전환?</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          :value="animationDuration"
          @change="updateAnimation($event, 'animationDuration')"
          placeholder="날짜 전환에 드는 시간을 입력해주세요."
        />
      </div> -->

      <div class="inputLine">
        <label>날짜 전환 주기</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          :value="animationInterval"
          @change="updateAnimation($event, 'animationInterval')"
          placeholder="날짜 전환 주기를 입력해주세요."
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

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
  computed: mapState("animations", [
    "animationType",
    "animationDuration",
    "animationInterval",
    "animationTypes",
  ]),
}
</script>
