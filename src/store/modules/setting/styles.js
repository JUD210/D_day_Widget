import { rgbaToHex, rgbaToArray } from "hex-and-rgba"

export const namespaced = true

// @T apply commented styles
export const state = {
  fontFamilies: [
    "Jeju Gothic",
    "Jeju Hallasan",
    "Jeju Myeongjo",

    "Hanna",

    "Nanum Gothic",
    "Nanum Gothic Coding",
    "Nanum Brush Script",
    "Nanum Pen Script",
    "Nanum Myeongjo",

    "KoPub Batang",

    "Noto Sans KR",

    "Arial",
    "Helvetica",
    "Helvetica Neue",
    "sans-serif",
    "Verdana",
    "Georgia",
  ],
  fontWeights: ["normal", "bold", "bolder", "lighter"],
  borderStyles: [
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
  ],

  /*--------------------------------------------------------*/

  styleDDW: {
    "border-color": "rgba(0, 0, 0, 0.6)",
    opacityForBorder: 0.6,
    "border-style": "double",
    "border-width": "5px",
    "border-radius": "5px",
    width: "400px",
  },

  styleDDWDDayPart: {
    "background-color": "rgba(35, 35, 35, 1.0)",
    opacityForBG: 1.0,

    height: "130px",
    // @T add: Import provided BG Image
    // @T add: Custom Image
  },

  styleDDWDDayPartTitle: {
    "font-family": "Jeju Gothic",
    "font-size": "40px",
    "font-weight": "normal",
    color: "rgba(255, 255, 255, 1.0)",
    opacityForText: 1.0,
  },
  styleDDWDDayPartDDay: {
    "font-family": "Jeju Gothic",
    "font-size": "35px",
    "font-weight": "normal",
    color: "rgba(255, 74, 74, 1.0)",
    opacityForText: 1.0,
  },
  styleDDWDDayPartDate: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "rgba(255, 255, 255, 1.0)",
    opacityForText: 1.0,
  },

  /*--------------------------------------------------------*/

  styleDDWTimerPart: {
    "background-color": "rgba(5, 24, 36, 1.0)",
    opacityForBG: 1.0,

    height: "80px",
  },

  styleDDWTimerPartNumber: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "rgba(255, 255, 255, 1.0)",
    opacityForText: 1.0,

    "background-color": "rgba(80, 77, 77, 1.0)",
    opacityForBG: 0.7,

    "border-color": "rgba(35, 35, 35, 1)",
    opacityForBorder: 1.0,
    "border-style": "solid",
    "border-width": "1px",
    "border-radius": "5px",

    width: "55px",
    height: "30px",

    "padding-left": "5px",
    "padding-right": "5px",
    "padding-bottom": "0px",
    "padding-top": "0px",
  },
  styleDDWTimerPartNumberString: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "rgba(255, 255, 255, 1.0)",
    opacityForText: 1.0,
  },
}

export const mutations = {
  UPDATE_STYLE(state, { target, attr, value }) {
    state[target][attr] = value
  },

  RESET_STYLE(state, styles) {
    state.styleDDW = styles.styleDDW
    state.styleDDWDDayPart = styles.styleDDWDDayPart
    state.styleDDWDDayPartTitle = styles.styleDDWDDayPartTitle
    state.styleDDWDDayPartDDay = styles.styleDDWDDayPartDDay
    state.styleDDWDDayPartDate = styles.styleDDWDDayPartDate
    state.styleDDWTimerPart = styles.styleDDWTimerPart
    state.styleDDWTimerPartNumber = styles.styleDDWTimerPartNumber
    state.styleDDWTimerPartNumberString = styles.styleDDWTimerPartNumberString
  },
}

export const actions = {
  updateStyle({ commit }, { target, attr, value }) {
    commit("UPDATE_STYLE", { target, attr, value })

    // console.log(`styles/UPDATE_STYLE
    // state[${target}][${attr}] = ${value}`)
  },

  resetStyles({ commit }, styles) {
    commit("RESET_STYLE", styles)

    // console.log(`styles/RESET_STYLE
    // state.styleDDW = ${styles.styleDDW}
    // state.styleDDWDDayPart = ${styles.styleDDWDDayPart}
    // state.styleDDWDDayPartTitle = ${styles.styleDDWDDayPartTitle}
    // state.styleDDWDDayPartDDay = ${styles.styleDDWDDayPartDDay}
    // state.styleDDWDDayPartDate = ${styles.styleDDWDDayPartDate}
    // state.styleDDWTimerPart = ${styles.styleDDWTimerPart}
    // state.styleDDWTimerPartNumber = ${styles.styleDDWTimerPartNumber}
    // state.styleDDWTimerPartNumberString = ${
    //   styles.styleDDWTimerPartNumberString
    // }`)
  },
}

export const getters = {
  getStyleAttr: state => (target, attr) => {
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
      return state[target][attr].split("px")[0]
    } else if (["color", "background-color", "border-color"].includes(attr)) {
      return rgbaToHex(rgbaToArray(state[target][attr])).slice(0, 7)
    } else if (
      ["opacityForText", "opacityForBG", "opacityForBorder"].includes(attr)
    ) {
      console.log(`round ${Math.round(state[target][attr] * 100)}`)
      return Math.round(state[target][attr] * 100)
    } else {
      return state[target][attr]
    }
  },
}
