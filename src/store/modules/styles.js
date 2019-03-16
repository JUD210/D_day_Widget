export const namespaced = true

// Tadd: Add commented styles
export const state = {
  styleDDayWidget: {
    "border-style": "dotted",
    "border-color": "black",

    // @T edit: need getters to delete px and Edit
    "border-radius": "5px",
    "border-width": "1px",
  },

  styleDDayPart: {
    "background-color": "rgb(35, 35, 35)",

    "font-weight": "bold",
    opacity: 1.0,

    // @T add: Import provided BG Image
    // @T add: Custom Image
  },

  styleTimerPart: {
    "background-color": "rgb(5, 24, 36)",
    opacity: 1.0,
  },

  /*--------------------------------------------------------*/

  fontFamilies: ["arial", "verdana", "georgia"],

  styleDDayPartTitle: {
    "font-family": "arial",
    "font-size": "40",
    color: "#ffffff",

    // opacity: 1.0,
  },
  styleDDayPartDDay: {
    "font-family": "arial",
    "font-size": "35",
    color: "#ff4a4a",
  },
  styleDDayPartDate: {
    "font-family": "arial",
    "font-size": "20",
    color: "#ffffff",

    // @T edit: need getters
    opacity: 1.0,
  },

  styleTimerPartNumber: {
    "font-family": "arial",
    "font-size": "20",
    color: "#ffffff",
    "background-color": "rgba(80, 77, 77, 0.7)",
    opacity: 1.0,

    // @T edit: need getters to delete px and Edit
    width: "55px",
    "border-radius": "5px",
  },
  styleTimerPartNumberString: {
    "font-family": "arial",
    "font-size": "20",
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
  getStyleByAttr: state => (target, attr) => {
    return state[target][attr]
  },
}
