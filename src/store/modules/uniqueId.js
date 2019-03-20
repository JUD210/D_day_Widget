export const namespaced = "true"

export const state = {
  uniqueId: "",
}

export const mutations = {
  CREATE_UNIQUE_ID(state) {
    state.uniqueId = ""
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789"

    state.uniqueId = ""
    for (let i = 0; i < 20; i++) {
      state.uniqueId += possible.charAt(
        Math.floor(Math.random() * possible.length),
      )
    }
  },
  UPDATE_UNIQUE_ID(state, uniqueId) {
    state.uniqueId = uniqueId
  },
}

export const actions = {
  createUniqueId({ commit }) {
    commit("CREATE_UNIQUE_ID")

    // console.log(`uniqueId/CREATE_UNIQUE_ID
    // state.uniqueId = ${state.uniqueId}`)
  },
  updateUniqueId({ commit }, uniqueId) {
    commit("UPDATE_UNIQUE_ID", uniqueId)

    // console.log(`uniqueId/UPDATE_UNIQUE_ID
    // state.uniqueId = ${uniqueId}`)
  },
}
