export const namespaced = "true"

export const state = {
  // @T set detail rule
  // N * 100: Main Category
  // N * 10: Sub Category

  currentPage: 200,
}

export const mutations = {
  UPDATE_Current_Page(state, currentPage) {
    state.currentPage = currentPage
  },
}

export const actions = {
  updateCurrentPage({ commit }, currentPage) {
    commit("UPDATE_Current_Page", currentPage)

    // console.log(`currentPage/UPDATE_Current_Page
    // state.currentPage = ${currentPage}`)
  },
}
