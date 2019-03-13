export const namespaced = true

export const state = {
  ddayFormats: [
    "D-28 (D-%d)",
    "D 28 (D %d)",
    "D-day 28 (D-day %d)",
    "D day 28 (D day %d)",
  ],
  dateFormats: [
    "2019.02.19 (YYYY.MM.DD)",
    "2019-02-19 (YYYY-MM-DD)",
    "19.02.19 (YY.MM.DD)",
    "19-02-19 (YY-MM-DD)",
    "190219 (YYMMDD)",
  ],
  ddayFormat: "D-28 (D-%d)",
  dateFormat: "2019.02.19 (YYYY.MM.DD)",
}

export const mutations = {
  UPDATE_FORMAT_DDAY(state, ddayFormat) {
    state.ddayFormat = ddayFormat
  },
  UPDATE_FORMAT_DATE(state, dateFormat) {
    state.dateFormat = dateFormat
  },

  RESET_FORMAT(state, { ddayFormat, dateFormat }) {
    state.ddayFormat = ddayFormat
    state.dateFormat = dateFormat
  },
}

export const actions = {
  updateFormatDDay({ commit }, ddayFormat) {
    commit("UPDATE_FORMAT_DDAY", ddayFormat)
  },
  updateFormatDate({ commit }, dateFormat) {
    commit("UPDATE_FORMAT_DATE", dateFormat)
  },

  resetFormat({ commit }, { ddayFormat, dateFormat }) {
    commit("RESET_FORMAT", { ddayFormat, dateFormat })
  },
}
