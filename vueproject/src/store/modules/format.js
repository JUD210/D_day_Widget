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
  dday: "D-28 (D-%d)",
  date: "2019.02.19 (YYYY.MM.DD)",
}

export const mutations = {
  UPDATE_FORMAT_DDAY(state, dday) {
    state.dday = dday
  },
  UPDATE_FORMAT_DATE(state, date) {
    state.date = date
  },

  RESET_FORMAT(state, { dday, date }) {
    state.dday = dday
    state.date = date
  },
}

export const actions = {
  updateFormatDDay({ commit }, dday) {
    commit("UPDATE_FORMAT_DDAY", dday)
  },
  updateFormatDate({ commit }, date) {
    commit("UPDATE_FORMAT_DATE", date)
  },

  resetFormat({ commit }, { dday, date }) {
    commit("RESET_FORMAT", { dday, date })
  },
}
