export const namespaced = true

export const state = {
  animationTypes: ["slide", "none"],

  /*--------------------------------------------------------*/

  animationType: "slide",
  animationTransition: 0.8,
  animationInterval: 4,
}

export const mutations = {
  UPDATE_ANIMATION(state, { attr, value }) {
    state[attr] = value
  },

  RESET_ANIMATION(
    state,
    { animationType, animationTransition, animationInterval },
  ) {
    state.animationType = animationType
    state.animationTransition = animationTransition
    state.animationInterval = animationInterval
  },
}

export const actions = {
  updateAnimation({ commit }, { attr, value }) {
    commit("UPDATE_ANIMATION", { attr, value })

    console.log(`animations/UPDATE_ANIMATION
    state[${attr}] = ${value}`)
  },

  resetAnimation(
    { commit },
    { animationType, animationTransition, animationInterval },
  ) {
    commit("RESET_ANIMATION", {
      animationType,
      animationTransition,
      animationInterval,
    })

    console.log(`animations/RESET_ANIMATION
    state.animationType = ${animationType}
    state.animationTransition = ${animationTransition}
    state.animationInterval = ${animationInterval}`)
  },
}
