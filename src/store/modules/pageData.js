export const namespaced = "true"

export const state = {
  pageList: [
    ["Intro-Introduction"],
    ["Exams-Exams"],
    [
      "Styles-DDayPart",
      "Styles-DDayPartTitle",
      "Styles-DDayPartDDay",
      "Styles-DDayPartDate",
      "Styles-TimerPart",
      "Styles-TimerPartNumber",
      "Styles-TimerPartNumberString",
    ],
    ["Formats-Formats"],
    ["Animations-Animations"],
    ["Outro-Save"],
  ],

  currentMainPage: 0,
  currentSubPage: 0,
}

export const mutations = {
  UPDATE_Current_Page(state, cmd) {
    let cmp = state.currentMainPage
    let csp = state.currentSubPage

    if (cmd == "next") {
      if (state.pageList[cmp][csp + 1] !== undefined) {
        state.currentSubPage += 1
      } else if (state.pageList[cmp + 1][0] !== undefined) {
        state.currentMainPage += 1
        state.currentSubPage = 0
      } else {
        alert(`오류 발생! 스크린샷과 함께 연락처로 문의해주세요.
        pageDataUpdate`)
      }
    } else if (cmd == "prev") {
      if (state.pageList[cmp][csp - 1] !== undefined) {
        state.currentSubPage -= 1
      } else if (state.pageList[cmp - 1][csp] !== undefined) {
        state.currentMainPage -= 1
        state.currentSubPage = state.pageList[state.currentMainPage].length - 1
      } else {
        alert(`오류 발생! 스크린샷과 함께 연락처로 문의해주세요.
        pageDataUpdate`)
      }
    }
  },
}

export const actions = {
  updateCurrentPage({ commit }, cmd) {
    commit("UPDATE_Current_Page", cmd)
  },
}

export const getters = {
  getCurrentPage: state => {
    return state.pageList[state.currentMainPage][state.currentSubPage]
  },
}
