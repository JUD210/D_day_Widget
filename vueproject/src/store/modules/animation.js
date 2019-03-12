export const namespaced = true

export const state = {
  types: ["slide", "none"],
  type: "slide",
  transition: 1,
  interval: 3,
}

export const mutations = {
  UPDATE_ANIMATION_TYPE(state, type) {
    state.type = type
  },
  UPDATE_ANIMATION_SPEED(state, transition) {
    state.transition = transition
  },
  UPDATE_ANIMATION_INTERVAL(state, interval) {
    state.interval = interval
  },

  RESET_ANIMATION(state, { type, transition, interval }) {
    state.type = type
    state.transition = transition
    state.interval = interval
  },
}

export const actions = {
  updateAnimationType({ commit }, event) {
    commit("UPDATE_ANIMATION_TYPE", event.target.value)
  },
  updateAnimationTransition({ commit }, event) {
    commit("UPDATE_ANIMATION_SPEED", event.target.value)
  },
  updateAnimationInterval({ commit }, event) {
    commit("UPDATE_ANIMATION_INTERVAL", event.target.value)
  },

  resetAnimation({ commit }, { type, transition, interval }) {
    commit("RESET_ANIMATION", { type, transition, interval })
  },
}
