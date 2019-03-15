export const namespaced = true

export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  styleTitle: {
    "font-family": "arial",
    "font-size": "40",
    color: "#ffffff",
    "background-color": "#232323",
  },
  styleDDay: {
    "font-family": "arial",
    "font-size": "35",
    color: "#ff4a4a",
    "background-color": "#232323",
  },
  styleDate: {
    "font-family": "arial",
    "font-size": "20",
    color: "#ffffff",
    "background-color": "#232323",
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
