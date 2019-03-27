export const namespaced = "true"

export const state = {
  uniqueId: "",
  // if) not cached
  // 1. CREATE_UNIQUE_ID
  // 2.
}

export const mutations = {
  CREATE_UNIQUE_ID(state) {
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789"

    if (localStorage["uniqueId"] === undefined) {
      alert(`nothing: ${localStorage["uniqueId"]}`)

      let uniqueId = ""
      for (let i = 0; i < 20; i++) {
        uniqueId += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      state.uniqueId = uniqueId
      localStorage["uniqueId"] = uniqueId
    } else {
      state.uniqueId = localStorage["uniqueId"]
    }
  },
  UPDATE_UNIQUE_ID(state, uniqueId) {
    state.uniqueId = uniqueId
    localStorage["uniqueId"] = uniqueId
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
