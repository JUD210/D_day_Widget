export const namespaced = true

export const state = {
  formatDDays: [
    "D-28 (D-%d)",
    "D 28 (D %d)",
    "D-day 28 (D-day %d)",
    "D day 28 (D day %d)",
  ],
  formatDates: [
    "2019.02.19 (YYYY.MM.DD)",
    "2019-02-19 (YYYY-MM-DD)",
    "19.02.19 (YY.MM.DD)",
    "19-02-19 (YY-MM-DD)",
    "190219 (YYMMDD)",
  ],
  formatDDay: "D-28 (D-%d)",
  formatDate: "2019.02.19 (YYYY.MM.DD)",
}

export const mutations = {
  UPDATE_FORMAT_DDAY(state, formatDDay) {
    state.formatDDay = formatDDay
  },
  UPDATE_FORMAT_DATE(state, formatDate) {
    state.formatDate = formatDate
  },

  RESET_FORMAT(state, { formatDDay, formatDate }) {
    state.formatDDay = formatDDay
    state.formatDate = formatDate
  },
}

export const actions = {
  upformatDateDDay({ commit }, formatDDay) {
    commit("UPDATE_FORMAT_DDAY", formatDDay)
  },
  upformatDateDate({ commit }, formatDate) {
    commit("UPDATE_FORMAT_DATE", formatDate)
  },

  resetFormat({ commit }, { formatDDay, formatDate }) {
    commit("RESET_FORMAT", { formatDDay, formatDate })
  },
}
