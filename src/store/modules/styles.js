export const namespaced = true

export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  styleTitle: {
    "font-family": "arial",
    "font-size": "40",
    color: "#ffffff",
    "background-color": "#454545",
  },
  styleDDay: {
    "font-family": "arial",
    "font-size": "35",
    color: "#ff4a4a",
    "background-color": "#454545",
  },
  styleDate: {
    "font-family": "arial",
    "font-size": "20",
    color: "#ffffff",
    "background-color": "#454545",
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

    console.log(`styles/UPDATE_STYLE
    state[${target}][${attr}] = ${style}`)
  },

  resetStyle({ commit }, { target, style }) {
    commit("RESET_STYLE", { target, style })

    console.log(`styles/RESET_STYLE
    state[${target}] = ${JSON.stringify({ ...style })}`)
  },
}

export const getters = {
  getStyleByAttr: state => (target, attr) => {
    return state[target][attr]
  },
}
