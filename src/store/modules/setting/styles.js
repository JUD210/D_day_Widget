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
    "border-color": "#232323",
    opacityForBorder: 1.0,
    "border-style": "solid",
    "border-width": "4px",
    "border-radius": "5px",
  },

  styleDDWDDayPart: {
    "background-color": "#232323FF",
    opacityForBG: 1.0,

    width: "400px",
    height: "130px",
    // @T add: Import provided BG Image
    // @T add: Custom Image
  },

  styleDDWDDayPartTitle: {
    "font-family": "Jeju Gothic",
    "font-size": "40px",
    "font-weight": "normal",
    color: "#ffffffFF",
    opacityForText: 1.0,
  },
  styleDDWDDayPartDDay: {
    "font-family": "Jeju Gothic",
    "font-size": "35px",
    "font-weight": "normal",
    color: "#ff4a4aFF",
    opacityForText: 1.0,
  },
  styleDDWDDayPartDate: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "#ffffffFF",
    opacityForText: 1.0,
  },

  /*--------------------------------------------------------*/

  styleDDWTimerPart: {
    "background-color": "#051824FF",
    opacityForBG: 1.0,

    width: "400px",
    height: "80px",
  },

  styleDDWTimerPartNumber: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "#ffffffFF",
    opacityForText: 1.0,

    "background-color": "#504d4dFF",
    opacityForBG: 0.7,

    "border-color": "#232323FF",
    opacityForBorder: 1.0,
    "border-style": "solid",
    "border-width": "1px",
    "border-radius": "5px",

    width: "55px",

    "padding-left": "5px",
    "padding-right": "5px",
    "padding-bottom": "0px",
    "padding-top": "0px",
  },
  styleDDWTimerPartNumberString: {
    "font-family": "Jeju Gothic",
    "font-size": "20px",
    "font-weight": "normal",
    color: "#ffffffFF",
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

    console.log(`styles/UPDATE_STYLE
    state[${target}][${attr}] = ${value}`)
  },

  resetStyles({ commit }, styles) {
    commit("RESET_STYLE", styles)

    console.log(`styles/RESET_STYLE
    state.styleDDW = ${styles.styleDDW}
    state.styleDDWDDayPart = ${styles.styleDDWDDayPart}
    state.styleDDWDDayPartTitle = ${styles.styleDDWDDayPartTitle}
    state.styleDDWDDayPartDDay = ${styles.styleDDWDDayPartDDay}
    state.styleDDWDDayPartDate = ${styles.styleDDWDDayPartDate}
    state.styleDDWTimerPart = ${styles.styleDDWTimerPart}
    state.styleDDWTimerPartNumber = ${styles.styleDDWTimerPartNumber}
    state.styleDDWTimerPartNumberString = ${
      styles.styleDDWTimerPartNumberString
    }`)
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
      return state[target][attr].slice(0, 7)
    } else if (
      ["opacityForText", "opacityForBG", "opacityForBorder"].includes(attr)
    ) {
      return Math.round(state[target][attr] * 100)
    } else {
      return state[target][attr]
    }
  },
}
