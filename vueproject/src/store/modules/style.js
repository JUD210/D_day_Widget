export const state = {
  fontFamilies: ["arial", "verdana", "georgia"],
  title: {
    "font-family": "arial",
    "font-size": 4,
    color: "#ff0000",
    "background-color": "#ff0000",
  },
  dday: {
    "font-family": "arial",
    "font-size": 4,
    color: "#ff0000",
    "background-color": "#ff0000",
  },
  date: {
    "font-family": "arial",
    "font-size": 4,
    color: "#ff0000",
    "background-color": "#ff0000",
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

export const getters = {
  getStyleByAttr: state => (target, attr) => {
    return state[target][attr]
  },
}
