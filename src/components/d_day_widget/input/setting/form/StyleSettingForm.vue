<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <!-- // @T add: apply this. -->
    <div v-if="isApplicable('font-family')" class="inputLine">
      <label>글꼴</label>
      <select
        :value="getStyleAttr(styleFor, 'font-family')"
        @change="updateStyle($event, 'font-family')"
      >
        <option
          v-for="(fontFamily, index) in fontFamilies"
          :value="fontFamily"
          :key="index"
          >{{ fontFamily }}</option
        >
      </select>
    </div>

    <div v-if="isApplicable('font-size')" class="inputLine">
      <label>글자 크기</label>
      <input
        type="number"
        min="1"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'font-size')"
        @change="updateStyle($event, 'font-size')"
        placeholder="사이즈를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('font-weight')" class="inputLine">
      <label>글자 두께</label>
      <select
        :value="getStyleAttr(styleFor, 'font-weight')"
        @change="updateStyle($event, 'font-weight')"
      >
        <option
          v-for="(fontWeight, index) in fontWeights"
          :value="fontWeight"
          :key="index"
          >{{ fontWeight }}</option
        >
      </select>
    </div>

    <div v-if="isApplicable('color')" class="inputLine">
      <label>글자 색</label>
      <input
        type="color"
        :value="getStyleAttr(styleFor, 'color')"
        @change="updateStyle($event, 'color')"
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('opacity')" class="inputLine">
      <label>글자 투명도 (%)</label>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'opacity')"
        @change="updateStyle($event, 'opacity')"
        placeholder="투명도를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('background-color')" class="inputLine">
      <label>배경 색</label>
      <input
        type="color"
        :value="getStyleAttr(styleFor, 'background-color')"
        @change="updateStyle($event, 'background-color')"
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('opacityForBG')" class="inputLine">
      <label>배경 투명도 (%)</label>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'opacityForBG')"
        @change="updateStyle($event, 'opacityForBG')"
        placeholder="투명도를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('border-color')" class="inputLine">
      <label>테두리 색</label>
      <input
        type="color"
        :value="getStyleAttr(styleFor, 'border-color')"
        @change="updateStyle($event, 'border-color')"
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('opacityForBorder')" class="inputLine">
      <label>테두리 투명도 (%)</label>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'opacityForBorder')"
        @change="updateStyle($event, 'opacityForBorder')"
        placeholder="투명도를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('border-style')" class="inputLine">
      <label>테두리 종류</label>
      <select
        :value="getStyleAttr(styleFor, 'border-style')"
        @change="updateStyle($event, 'border-style')"
      >
        <option
          v-for="(borderStyle, index) in borderStyles"
          :value="borderStyle"
          :key="index"
          >{{ borderStyle }}</option
        >
      </select>
    </div>

    <div v-if="isApplicable('border-width')" class="inputLine">
      <label>테두리 폭</label>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'border-width')"
        @change="updateStyle($event, 'border-width')"
        placeholder="길이를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('border-radius')" class="inputLine">
      <label>테두리 다듬기 (타원형)</label>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        :value="getStyleAttr(styleFor, 'border-radius')"
        @change="updateStyle($event, 'border-radius')"
        placeholder="값을 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('width')" class="inputLine">
      <label>가로 길이</label>
      <input
        type="number"
        min="0"
        max="2000"
        step="1"
        :value="getStyleAttr(styleFor, 'width')"
        @change="updateStyle($event, 'width')"
        placeholder="길이를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>

    <div v-if="isApplicable('height')" class="inputLine">
      <label>세로 길이</label>
      <input
        type="number"
        min="0"
        max="2000"
        step="1"
        :value="getStyleAttr(styleFor, 'height')"
        @change="updateStyle($event, 'height')"
        placeholder="길이를 입력해주세요."
      /><span>&nbsp;px</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: "StyleSettingForm",
  props: {
    title: {
      type: String,
      default: "",
    },
    styleFor: {
      type: String,
      default: "",
    },
  },
  methods: {
    isApplicable(attr) {
      return attr in this.$store.state.styles[this.styleFor]
    },

    updateStyle(event, attr) {
      this.$store.dispatch("styles/updateStyle", {
        target: this.styleFor,
        attr: attr,
        styleObject: event.target.value,
      })
    },
  },
  computed: {
    ...mapState("styles", ["fontFamilies", "fontWeights", "borderStyles"]),
    ...mapGetters("styles", ["getStyleAttr"]),
  },
}
</script>
