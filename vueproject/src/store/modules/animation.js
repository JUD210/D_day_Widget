export const namespaced = true

export const state = {
  types: ["slide", "none"],
  type: "slide",
  speed: 4,
  interval: 1.5,
}

export const mutations = {
  UPDATE_ANIMATION_TYPE(state, type) {
    state.type = type
  },
  UPDATE_ANIMATION_SPEED(state, speed) {
    state.speed = speed
  },
  UPDATE_ANIMATION_INTERVAL(state, interval) {
    state.interval = interval
  },

  RESET_ANIMATION(state, { type, speed, interval }) {
    state.type = type
    state.speed = speed
    state.interval = interval
  },
}

export const actions = {
  updateAnimationType({ commit }, event) {
    commit("UPDATE_ANIMATION_TYPE", event.target.value)
  },
  updateAnimationSpeed({ commit }, event) {
    commit("UPDATE_ANIMATION_SPEED", event.target.value)
  },
  updateAnimationInterval({ commit }, event) {
    commit("UPDATE_ANIMATION_INTERVAL", event.target.value)
  },

  resetAnimation({ commit }, { type, speed, interval }) {
    commit("RESET_ANIMATION", { type, speed, interval })
  },
}
