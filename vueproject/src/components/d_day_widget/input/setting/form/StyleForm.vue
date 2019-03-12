<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div class="inputLine">
      <label>Font Type: </label>
      <select
        :value="getStyleByAttr(styleFor, 'font-family')"
        @change="updateFontFamily"
      >
        <option
          v-for="(font, index) in fontFamilies"
          :value="font"
          :key="index"
          >{{ font }}</option
        >
      </select>
    </div>
    <div class="inputLine">
      <label>Font Size: </label>
      <input
        type="number"
        min="1"
        :value="getStyleByAttr(styleFor, 'font-size')"
        @change="updateFontSize"
      /><span>&nbsp;px</span>
    </div>
    <div class="inputLine">
      <label>Font Color: </label>
      <input
        type="color"
        :value="getStyleByAttr(styleFor, 'color')"
        @change="updateFontColor"
      />
    </div>
    <div class="inputLine">
      <label>Background Color: </label>
      <input
        type="color"
        :value="getStyleByAttr(styleFor, 'background-color')"
        @change="updateBGColor"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: "StyleForm",
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
    updateFontFamily(event) {
      this.$store.dispatch("style/updateStyle", {
        target: this.styleFor,
        attr: "font-family",
        style: event.target.value,
      })
    },
    updateFontSize(event) {
      this.$store.dispatch("style/updateStyle", {
        target: this.styleFor,
        attr: "font-size",
        style: event.target.value,
      })
    },
    updateFontColor(event) {
      this.$store.dispatch("style/updateStyle", {
        target: this.styleFor,
        attr: "color",
        style: event.target.value,
      })
    },
    updateBGColor(event) {
      this.$store.dispatch("style/updateStyle", {
        target: this.styleFor,
        attr: "background-color",
        style: event.target.value,
      })
    },
  },
  computed: {
    ...mapState("style", ["fontFamilies"]),
    ...mapGetters("style", ["getStyleByAttr"]),
  },
}
</script>
