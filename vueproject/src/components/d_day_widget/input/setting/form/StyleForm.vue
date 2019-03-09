<template>
  <div>
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
      />px
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
    updateFontFamily(e) {
      this.$store.commit("UPDATE_STYLE", {
        target: this.styleFor,
        attr: "font-family",
        style: e.target.value,
      })
    },
    updateFontSize(e) {
      this.$store.commit("UPDATE_STYLE", {
        target: this.styleFor,
        attr: "font-size",
        style: e.target.value,
      })
    },
    updateFontColor(e) {
      this.$store.commit("UPDATE_STYLE", {
        target: this.styleFor,
        attr: "color",
        style: e.target.value,
      })
    },
    updateBGColor(e) {
      this.$store.commit("UPDATE_STYLE", {
        target: this.styleFor,
        attr: "background-color",
        style: e.target.value,
      })
    },
  },
  computed: {
    ...mapState({ fontFamilies: state => state.style.fontFamilies }),
    ...mapGetters(["getStyleByAttr"]),
  },
}
</script>

<style scoped></style>
