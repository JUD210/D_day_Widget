export const namespaced = true

export const state = {
  __animationTypes: [
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
  __isIntervalChanged: true,

  /*--------------------------------------------------------*/

  animationType: "fade",
  // @T NEED CONFIGURE!
  animationDuration: 0.8,
  animationInterval: 5,
}

export const mutations = {
  UPDATE_ANIMATION(state, { attr, value }) {
    state[attr] = value
    state.__isIntervalChanged = true
  },

  RESET_ANIMATION(state, animations) {
    state.__isIntervalChanged = true

    for (let target in state) {
      if (target.slice(0, 2) !== "__") {
        if (state[target].constructor === Object) {
          for (let attr in state[target]) {
            if (animations[target][attr] !== undefined) {
              state[target][attr] = animations[target][attr]
            }
          }
        } else {
          if (animations[target] !== undefined) {
            state[target] = animations[target]
          }
        }
      }
    }

    // state.animationType = animations.animationType
    // state.animationDuration = animations.animationDuration
    // state.animationInterval = animations.animationInterval
  },

  UPDATE_ISINTERVALCHANGED(state, bool) {
    state.__isIntervalChanged = bool
  },
}

export const actions = {
  updateAnimation({ commit }, { attr, value }) {
    commit("UPDATE_ANIMATION", { attr, value })

    // console.log(`animations/UPDATE_ANIMATION
    // state[${attr}] = ${value}
    // state.__isIntervalChanged = true`)
  },

  resetAnimations({ commit }, animations) {
    commit("RESET_ANIMATION", animations)

    // console.log(`animations/RESET_ANIMATION
    // state.animationType = ${animationType}
    // state.animationDuration = ${animationDuration}
    // state.animationInterval = ${animationInterval}`)
  },

  updateIsIntervalChanged({ commit }, bool) {
    commit("UPDATE_ISINTERVALCHANGED", bool)

    // console.log(`animations/UPDATE_ISINTERVALCHANGED
    // state.__isIntervalChanged = ${bool}`)
  },
}

// export const getters = {
//   getAnimationObject() {
//     return { transition: "opacity 1s" }
//   },
// }
