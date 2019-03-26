<template>
  <div class="inputForm">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <div
      v-if="
        isApplicable('font-family') ||
          isApplicable('font-size') ||
          isApplicable('font-weight') ||
          isApplicable('text-align') ||
          isApplicable('color') ||
          isApplicable('opacityForText')
      "
      class="inputLinesContainer"
    >
      <div v-if="isApplicable('font-family')" class="inputLine">
        <label>글꼴</label>
        <select
          :value="getStyleAttr(styleFor, 'font-family')"
          @change="updateStyle($event, 'font-family')"
        >
          <option
            v-for="(fontFamily, index) in __fontFamilies"
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
            v-for="(fontWeight, index) in __fontWeights"
            :value="fontWeight"
            :key="index"
            >{{ fontWeight }}</option
          >
        </select>
      </div>

      <div v-if="isApplicable('text-align')" class="inputLine">
        <label>글자 정렬</label>
        <select
          :value="getStyleAttr(styleFor, 'text-align')"
          @change="updateStyle($event, 'text-align')"
        >
          <option
            v-for="(textAlign, index) in __textAligns"
            :value="textAlign"
            :key="index"
            >{{ textAlign }}</option
          >
        </select>
      </div>

      <div v-if="isApplicable('color')" class="inputLine">
        <label>글자 색</label>
        <input
          type="color"
          colorformat="rgba"
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

    <div
      v-if="isApplicable('background-color') || isApplicable('opacityForBG')"
      class="inputLinesContainer"
    >
      <div v-if="isApplicable('background-color')" class="inputLine">
        <label>배경 색</label>
        <input
          type="color"
          colorformat="rgba"
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

    <div
      v-if="
        isApplicable('border-color') ||
          isApplicable('opacityForBorder') ||
          isApplicable('border-style') ||
          isApplicable('border-width') ||
          isApplicable('border-top-left-radius') ||
          isApplicable('border-top-right-radius') ||
          isApplicable('border-bottom-left-radius') ||
          isApplicable('border-bottom-right-radius')
      "
      class="inputLinesContainer"
    >
      <div v-if="isApplicable('border-color')" class="inputLine">
        <label>테두리 색</label>
        <input
          type="color"
          colorformat="rgba"
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
            v-for="(borderStyle, index) in __borderStyles"
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

      <div v-if="isApplicable('border-top-left-radius')" class="inputLine">
        <label>테두리 다듬기 - ↖ (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-top-left-radius')"
          @change="updateStyle($event, 'border-top-left-radius')"
          placeholder="값을 입력해주세요."
        />
      </div>
      <div v-if="isApplicable('border-top-right-radius')" class="inputLine">
        <label>테두리 다듬기 - ↗ (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-top-right-radius')"
          @change="updateStyle($event, 'border-top-right-radius')"
          placeholder="값을 입력해주세요."
        />
      </div>
      <div v-if="isApplicable('border-bottom-left-radius')" class="inputLine">
        <label>테두리 다듬기 - ↙ (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-bottom-left-radius')"
          @change="updateStyle($event, 'border-bottom-left-radius')"
          placeholder="값을 입력해주세요."
        />
      </div>
      <div v-if="isApplicable('border-bottom-right-radius')" class="inputLine">
        <label>테두리 다듬기 - ↘ (px)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          :value="getStyleAttr(styleFor, 'border-bottom-right-radius')"
          @change="updateStyle($event, 'border-bottom-right-radius')"
          placeholder="값을 입력해주세요."
        />
      </div>
    </div>

    <div
      v-if="isApplicable('width') || isApplicable('height')"
      class="inputLinesContainer"
    >
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

    <div
      v-if="isApplicable('left') || isApplicable('bottom')"
      class="inputLinesContainer"
    >
      <div v-if="isApplicable('left')" class="inputLine">
        <label>수평 위치 (px)</label>
        <input
          type="number"
          min="-2000"
          max="2000"
          step="1"
          :value="getStyleAttr(styleFor, 'left')"
          @change="updateStyle($event, 'left')"
          placeholder="위치를 입력해주세요."
        />
      </div>

      <div v-if="isApplicable('bottom')" class="inputLine">
        <label>수직 위치 (px)</label>
        <input
          type="number"
          min="-2000"
          max="2000"
          step="1"
          :value="getStyleAttr(styleFor, 'bottom')"
          @change="updateStyle($event, 'bottom')"
          placeholder="위치를 입력해주세요."
        />
      </div>
    </div>

    <div
      v-if="
        isApplicable('padding-left') ||
          isApplicable('padding-right') ||
          isApplicable('padding-bottom') ||
          isApplicable('padding-top')
      "
      class="inputLinesContainer"
    >
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
import { hexToRgba } from "hex-and-rgba"
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
      // if (attr === "height")
      // console.log(
      // `${attr} in ${this.styleFor} : ${attr in
      // this.$store.state.styles[this.styleFor]}`,
      // )
      return attr in this.$store.state.styles[this.styleFor]
    },

    updateStyle(event, attr) {
      let target = this.styleFor
      let value = event.target.value
      let maxValue = event.target.max
      let minValue = event.target.min

      value = Number(value) ? Number(value) : value
      maxValue = Number(maxValue) ? Number(maxValue) : maxValue
      minValue = Number(minValue) ? Number(minValue) : minValue

      if (typeof value != "string" && (value > maxValue || value < minValue)) {
        alert(`${minValue} ~ ${maxValue} 사이의 값을 입력해주세요!
(입력값: ${value})`)

        return 9
      }

      try {
        if (
          [
            "font-size",

            "border-width",

            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",

            "left",
            "bottom",

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
          value = (value / 100).toFixed(2)

          if (attr == "opacityForText") {
            this.$store.dispatch("styles/updateStyle", {
              target: target,
              attr: "color",
              value: this.getColorWithOpacity(
                this.$store.state.styles[target]["color"],
                value,
              ),
            })
          } else if (attr == "opacityForBG") {
            this.$store.dispatch("styles/updateStyle", {
              target: target,
              attr: "background-color",
              value: this.getColorWithOpacity(
                this.$store.state.styles[target]["background-color"],
                value,
              ),
            })
          } else if (attr == "opacityForBorder") {
            this.$store.dispatch("styles/updateStyle", {
              target: target,
              attr: "border-color",
              value: this.getColorWithOpacity(
                this.$store.state.styles[target]["border-color"],
                value,
              ),
            })
          }
        } else if (attr == "color") {
          value = hexToRgba(value).toString()
          value = this.getColorWithOpacity(
            value,
            this.$store.state.styles[target]["opacityForText"],
          )
        } else if (attr == "background-color") {
          value = hexToRgba(value).toString()
          value = this.getColorWithOpacity(
            value,
            this.$store.state.styles[target]["opacityForBG"],
          )
        } else if (attr == "border-color") {
          value = hexToRgba(value).toString()
          value = this.getColorWithOpacity(
            value,
            this.$store.state.styles[target]["opacityForBorder"],
          )
        }

        this.$store.dispatch("styles/updateStyle", {
          target,
          attr,
          value,
        })
      } catch (error) {
        alert(`오류 발생! 사진을 찍어서 연락처로 문의해주세요. 
        StyleSettingForm-> ${error}`)
      }
    },

    getColorWithOpacity(color, opacity) {
      let type = color.slice(0, color.indexOf("("))
      console.log(`opa:${opacity}`)

      if (type === "rgba") {
        let result = color.replace(
          color.slice(color.lastIndexOf(",") + 1),
          `${opacity})`,
        )

        console.log(`return color: ${result}`)
        return result
      } else if (type === "rgb") {
        let result = color.replace("rgb", "rgba").replace(")", `,${opacity})`)

        console.log(`return color: ${result}`)
        return result
      }
    },
  },
  computed: {
    ...mapState("styles", [
      "__fontFamilies",
      "__fontWeights",
      "__textAligns",
      "__borderStyles",
    ]),
    ...mapGetters("styles", ["getStyleAttr"]),
  },
}
</script>
