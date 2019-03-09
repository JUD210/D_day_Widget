export const state = {
  type: "slide",
  speed: 4,
  interval: 1.5,
  types: ["slide"],
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
