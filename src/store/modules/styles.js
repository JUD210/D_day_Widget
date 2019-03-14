export const namespaced = true

export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  styleTitle: {
    "font-family": "arial",
    "font-size": "10",
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
  styleDDay: {
    "font-family": "arial",
    "font-size": "10",
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
  styleDate: {
    "font-family": "arial",
    "font-size": "10",
    color: "#2c3e50",
    "background-color": "#ffffff",
  },
}

export const mutations = {
  UPDATE_STYLE(state, { target, attr, style }) {
    state[target][attr] = style
  },

  RESET_STYLE(state, { target, style }) {
    state[target] = { ...style }
  },
}

export const actions = {
  updateStyle({ commit }, { target, attr, style }) {
    commit("UPDATE_STYLE", { target, attr, style })
  },

  resetStyle({ commit }, { target, style }) {
    commit("RESET_STYLE", { target, style })
  },
}

export const getters = {
  getStyleByAttr: state => (target, attr) => {
    return state[target][attr]
  },
}
