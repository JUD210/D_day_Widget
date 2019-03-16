export const namespaced = true

// @T apply commented styles
export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  fontWeights: ["normal", "bold", "bolder", "lighter"],
  borderStyles: [
    "groove",
    "ridge",
    "solid",
    "dotted",
    "dashed",
    "double",
    "inset",
    "outset",
    "none",
  ],

  /*--------------------------------------------------------*/

  styleDDW: {
    "border-color": "#232323",
    opacityForBorder: 100,
    "border-style": "solid",
    "border-width": 1,
    "border-radius": 5,

    width: 400,
    height: 400,
  },

  styleDDWDDayPart: {
    "background-color": "#232323",
    opacityForBG: 100,

    // @T add: Import provided BG Image
    // @T add: Custom Image
  },

  styleDDWDDayPartTitle: {
    "font-family": "arial",
    "font-size": 40,
    "font-weight": "normal",
    color: "#ffffff",
    opacity: 100,
  },
  styleDDWDDayPartDDay: {
    "font-family": "arial",
    "font-size": 35,
    "font-weight": "normal",
    color: "#ff4a4a",
    opacity: 100,
  },
  styleDDWDDayPartDate: {
    "font-family": "arial",
    "font-size": 20,
    "font-weight": "normal",
    color: "#ffffff",
    opacity: 100,
  },

  /*--------------------------------------------------------*/

  styleDDWTimerPart: {
    "background-color": "#051824",
    opacityForBG: 100,
  },

  styleDDWTimerPartNumber: {
    "font-family": "arial",
    "font-size": 20,
    "font-weight": "normal",
    color: "#ffffff",
    opacity: 100,

    "background-color": "#504d4d",
    opacityForBG: 70,

    "border-color": "#232323",
    opacityForBorder: 100,
    "border-style": "none",
    "border-width": 1,
    "border-radius": 5,

    width: 55,

    "padding-left": 5,
    "padding-right": 5,
    "padding-bottom": 0,
    "padding-top": 0,
  },
  styleDDWTimerPartNumberString: {
    "font-family": "arial",
    "font-size": 20,
    "font-weight": "bold",
    color: "#ffffff",
    opacity: 1.0,
  },
}

export const mutations = {
  UPDATE_STYLE(state, { target, attr, styleObject }) {
    state[target][attr] = styleObject
  },

  RESET_STYLE(state, { target, styleObject }) {
    state[target] = styleObject
  },
}

export const actions = {
  updateStyle({ commit }, { target, attr, styleObject }) {
    commit("UPDATE_STYLE", { target, attr, styleObject })

    console.log(`styles/UPDATE_STYLE
    state[${target}][${attr}] = ${styleObject}`)
  },

  resetStyle({ commit }, { target, styleObject }) {
    commit("RESET_STYLE", { target, styleObject })

    console.log(`styles/RESET_STYLE
    state[${target}] = ${JSON.stringify(styleObject)}`)
  },
}

export const getters = {
  getStyleAttr: state => (target, attr) => {
    return state[target][attr]
  },
}
