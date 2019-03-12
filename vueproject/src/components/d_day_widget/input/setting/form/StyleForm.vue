<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div class="inputLine">
      <label>Font Type: </label>
      <select
        :value="getStyleByAttr(styleFor, 'font-family')"
        @change="updateStyle($event, 'font-family')"
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
        @change="updateStyle($event, 'font-size')"
      /><span>&nbsp;px</span>
    </div>
    <div class="inputLine">
      <label>Font Color: </label>
      <input
        type="color"
        :value="getStyleByAttr(styleFor, 'color')"
        @change="updateStyle($event, 'color')"
      />
    </div>
    <div class="inputLine">
      <label>Background Color: </label>
      <input
        type="color"
        :value="getStyleByAttr(styleFor, 'background-color')"
        @change="updateStyle($event, 'background-color')"
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
    updateStyle(event, attr) {
      this.$store.dispatch("style/updateStyle", {
        target: this.styleFor,
        attr: attr,
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
