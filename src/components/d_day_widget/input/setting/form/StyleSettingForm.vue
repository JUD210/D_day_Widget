<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <div v-if="isApplicable('font-family')" class="inputLinesContainer">
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
        <label>글자 크기 (px)</label>
        <input
          type="number"
          min="1"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'font-size')"
          @change="updateStyle($event, 'font-size')"
          placeholder="사이즈를 입력해주세요."
        />
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
        />
      </div>

      <div v-if="isApplicable('opacityForText')" class="inputLine">
        <label>글자 투명도 (%)</label>
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          :value="getStyleAttr(styleFor, 'opacityForText')"
          @change="updateStyle($event, 'opacityForText')"
          placeholder="투명도를 입력해주세요."
        />
      </div>
    </div>

    <div v-if="isApplicable('background-color')" class="inputLinesContainer">
      <div v-if="isApplicable('background-color')" class="inputLine">
        <label>배경 색</label>
        <input
          type="color"
          :value="getStyleAttr(styleFor, 'background-color')"
          @change="updateStyle($event, 'background-color')"
        />
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
        />
      </div>
    </div>

    <div v-if="isApplicable('border-color')" class="inputLinesContainer">
      <div v-if="isApplicable('border-color')" class="inputLine">
        <label>테두리 색</label>
        <input
          type="color"
          :value="getStyleAttr(styleFor, 'border-color')"
          @change="updateStyle($event, 'border-color')"
        />
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
        />
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
        <label>테두리 폭 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-width')"
          @change="updateStyle($event, 'border-width')"
          placeholder="길이를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('border-radius')" class="inputLine">
        <label>테두리 다듬기 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-radius')"
          @change="updateStyle($event, 'border-radius')"
          placeholder="값을 입력해주세요."
        />
      </div>
    </div>

    <div v-if="isApplicable('width')" class="inputLinesContainer">
      <div v-if="isApplicable('width')" class="inputLine">
        <label>가로 길이 (px)</label>
        <input
          type="number"
          min="0"
          max="2000"
          step="1"
          :value="getStyleAttr(styleFor, 'width')"
          @change="updateStyle($event, 'width')"
          placeholder="길이를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('height')" class="inputLine">
        <label>세로 길이 (px)</label>
        <input
          type="number"
          min="0"
          max="2000"
          step="1"
          :value="getStyleAttr(styleFor, 'height')"
          @change="updateStyle($event, 'height')"
          placeholder="길이를 입력해주세요."
        />
      </div>
    </div>

    <div v-if="isApplicable('padding-left')" class="inputLinesContainer">
      <div v-if="isApplicable('padding-left')" class="inputLine">
        <label>패딩 왼쪽 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'padding-left')"
          @change="updateStyle($event, 'padding-left')"
          placeholder="사이즈를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('padding-right')" class="inputLine">
        <label>패딩 오른쪽 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'padding-right')"
          @change="updateStyle($event, 'padding-right')"
          placeholder="사이즈를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('padding-bottom')" class="inputLine">
        <label>패딩 아랫쪽 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'padding-bottom')"
          @change="updateStyle($event, 'padding-bottom')"
          placeholder="사이즈를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('padding-top')" class="inputLine">
        <label>패딩 윗쪽 (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'padding-top')"
          @change="updateStyle($event, 'padding-top')"
          placeholder="사이즈를 입력해주세요."
        />
      </div>
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
      let target = this.styleFor
      let value = event.target.value

      if (
        [
          "font-size",
          "border-width",
          "border-radius",
          "width",
          "height",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "padding-top",
        ].includes(attr)
      ) {
        value = `${value}px`
      } else if (
        ["opacityForText", "opacityForBG", "opacityForBorder"].includes(attr)
      ) {
        value = value / 100

        if (attr == "opacityForText") {
          this.$store.dispatch("styles/updateStyle", {
            target: target,
            attr: "color",
            value: this.getHexColorWithOpacity(
              this.$store.state.styles[target]["color"],
              value,
            ),
          })
        } else if (attr == "opacityForBG") {
          this.$store.dispatch("styles/updateStyle", {
            target: target,
            attr: "background-color",
            value: this.getHexColorWithOpacity(
              this.$store.state.styles[target]["background-color"],
              value,
            ),
          })
        } else if (attr == "opacityForBorder") {
          this.$store.dispatch("styles/updateStyle", {
            target: target,
            attr: "border-color",
            value: this.getHexColorWithOpacity(
              this.$store.state.styles[target]["border-color"],
              value,
            ),
          })
        }
      } else if (attr == "color") {
        value = this.getHexColorWithOpacity(
          value,
          this.$store.state.styles[target]["opacityForText"],
        )
      } else if (attr == "background-color") {
        value = this.getHexColorWithOpacity(
          value,
          this.$store.state.styles[target]["opacityForBG"],
        )
      } else if (attr == "border-color") {
        value = this.getHexColorWithOpacity(
          value,
          this.$store.state.styles[target]["opacityForBorder"],
        )
      }

      this.$store.dispatch("styles/updateStyle", {
        target,
        attr,
        value,
      })
    },

    getHexColorWithOpacity(hexColor, opacity) {
      hexColor = hexColor.slice(0, 7)
      switch (Math.round(opacity * 100)) {
        case 100:
          return `${hexColor}FF`
        case 99:
          return `${hexColor}FC`
        case 98:
          return `${hexColor}FA`
        case 97:
          return `${hexColor}F7`
        case 96:
          return `${hexColor}F5`
        case 95:
          return `${hexColor}F2`
        case 94:
          return `${hexColor}F0`
        case 93:
          return `${hexColor}ED`
        case 92:
          return `${hexColor}EB`
        case 91:
          return `${hexColor}E8`
        case 90:
          return `${hexColor}E6`
        case 89:
          return `${hexColor}E3`
        case 88:
          return `${hexColor}E0`
        case 87:
          return `${hexColor}DE`
        case 86:
          return `${hexColor}DB`
        case 85:
          return `${hexColor}D9`
        case 84:
          return `${hexColor}D6`
        case 83:
          return `${hexColor}D4`
        case 82:
          return `${hexColor}D1`
        case 81:
          return `${hexColor}CF`
        case 80:
          return `${hexColor}CC`
        case 79:
          return `${hexColor}C9`
        case 78:
          return `${hexColor}C7`
        case 77:
          return `${hexColor}C4`
        case 76:
          return `${hexColor}C2`
        case 75:
          return `${hexColor}BF`
        case 74:
          return `${hexColor}BD`
        case 73:
          return `${hexColor}BA`
        case 72:
          return `${hexColor}B8`
        case 71:
          return `${hexColor}B5`
        case 70:
          return `${hexColor}B3`
        case 69:
          return `${hexColor}B0`
        case 68:
          return `${hexColor}AD`
        case 67:
          return `${hexColor}AB`
        case 66:
          return `${hexColor}A8`
        case 65:
          return `${hexColor}A6`
        case 64:
          return `${hexColor}A3`
        case 63:
          return `${hexColor}A1`
        case 62:
          return `${hexColor}9E`
        case 61:
          return `${hexColor}9C`
        case 60:
          return `${hexColor}99`
        case 59:
          return `${hexColor}96`
        case 58:
          return `${hexColor}94`
        case 57:
          return `${hexColor}91`
        case 56:
          return `${hexColor}8F`
        case 55:
          return `${hexColor}8C`
        case 54:
          return `${hexColor}8A`
        case 53:
          return `${hexColor}87`
        case 52:
          return `${hexColor}85`
        case 51:
          return `${hexColor}82`
        case 50:
          return `${hexColor}80`
        case 49:
          return `${hexColor}7D`
        case 48:
          return `${hexColor}7A`
        case 47:
          return `${hexColor}78`
        case 46:
          return `${hexColor}75`
        case 45:
          return `${hexColor}73`
        case 44:
          return `${hexColor}70`
        case 43:
          return `${hexColor}6E`
        case 42:
          return `${hexColor}6B`
        case 41:
          return `${hexColor}69`
        case 40:
          return `${hexColor}66`
        case 39:
          return `${hexColor}63`
        case 38:
          return `${hexColor}61`
        case 37:
          return `${hexColor}5E`
        case 36:
          return `${hexColor}5C`
        case 35:
          return `${hexColor}59`
        case 34:
          return `${hexColor}57`
        case 33:
          return `${hexColor}54`
        case 32:
          ;[]
          return `${hexColor}52`
        case 31:
          return `${hexColor}4F`
        case 30:
          return `${hexColor}4D`
        case 29:
          return `${hexColor}4A`
        case 28:
          return `${hexColor}47`
        case 27:
          return `${hexColor}45`
        case 26:
          return `${hexColor}42`
        case 25:
          return `${hexColor}40`
        case 24:
          return `${hexColor}3D`
        case 23:
          return `${hexColor}3B`
        case 22:
          return `${hexColor}38`
        case 21:
          return `${hexColor}36`
        case 20:
          return `${hexColor}33`
        case 19:
          return `${hexColor}30`
        case 18:
          return `${hexColor}2E`
        case 17:
          return `${hexColor}2B`
        case 16:
          return `${hexColor}29`
        case 15:
          return `${hexColor}26`
        case 14:
          return `${hexColor}24`
        case 13:
          return `${hexColor}21`
        case 12:
          return `${hexColor}1F`
        case 11:
          return `${hexColor}1C`
        case 10:
          return `${hexColor}1A`
        case 9:
          return `${hexColor}17`
        case 8:
          return `${hexColor}14`
        case 7:
          return `${hexColor}12`
        case 6:
          return `${hexColor}0F`
        case 5:
          return `${hexColor}0D`
        case 4:
          return `${hexColor}0A`
        case 3:
          return `${hexColor}08`
        case 2:
          return `${hexColor}05`
        case 1:
          return `${hexColor}03`
        case 0:
          return `${hexColor}00`
      }
    },
  },
  computed: {
    ...mapState("styles", ["fontFamilies", "fontWeights", "borderStyles"]),
    ...mapGetters("styles", ["getStyleAttr"]),
  },
}
</script>
