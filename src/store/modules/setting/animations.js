export const namespaced = true

export const state = {
  animationTypes: [
    "fade",
    "fade-short",
    "fade-long",
    "fade-strong",
    "fade-short-strong",
    "fade-long-strong",
    "slide-fade",
    "slide",
    "none",
  ],
  isIntervalChanged: true,

  /*--------------------------------------------------------*/

  animationType: "fade",
  // @T NEED CONFIGURE!
  animationDuration: 0.8,
  animationInterval: 5,
}

export const mutations = {
  UPDATE_ANIMATION(state, { attr, value }) {
    state[attr] = value
    state.isIntervalChanged = true
  },

  RESET_ANIMATION(
    state,
    { animationType, animationDuration, animationInterval },
  ) {
    state.animationType = animationType
    state.animationDuration = animationDuration
    state.animationInterval = animationInterval
  },

  UPDATE_ISINTERVALCHANGED(state, bool) {
    state.isIntervalChanged = bool
  },
}

export const actions = {
  updateAnimation({ commit }, { attr, value }) {
    commit("UPDATE_ANIMATION", { attr, value })

    console.log(`animations/UPDATE_ANIMATION
    state[${attr}] = ${value}
    state.isIntervalChanged = true`)
  },

  resetAnimations(
    { commit },
    { animationType, animationDuration, animationInterval },
  ) {
    commit("RESET_ANIMATION", {
      animationType,
      animationDuration,
      animationInterval,
    })

    console.log(`animations/RESET_ANIMATION
    state.animationType = ${animationType}
    state.animationDuration = ${animationDuration}
    state.animationInterval = ${animationInterval}`)
  },

  updateIsIntervalChanged({ commit }, bool) {
    commit("UPDATE_ISINTERVALCHANGED", bool)

    console.log(`animations/UPDATE_ISINTERVALCHANGED
    state.isIntervalChanged = ${bool}`)
  },
}

// export const getters = {
//   getAnimationObject() {
//     return { transition: "opacity 1s" }
//   },
// }
