export const namespaced = true

export const state = {
  __formatDDays: ["D-9 (D-%d)", "D-09 (D-%dd)"],
  __formatDates: [
    "2019.2.9 (yyyy.m.d)",
    "2019-2-9 (yyyy-m-d)",
    "19.2.9 (yy.m.d)",
    "19-2-9 (yy-m-d)",

    "2.9.2019 (m.d.yyyy)",
    "2-9-2019 (m-d-yyyy)",
    "2.9.19 (m.d.yy)",
    "2-9-19 (m-d-yy)",

    "2019.02.09 (yyyy.mm.dd)",
    "2019-02-09 (yyyy-mm-dd)",
    "19.02.09 (yy.mm.dd)",
    "19-02-09 (yy-mm-dd)",

    "02.09.2019 (mm.dd.yyyy)",
    "02-09-2019 (mm-dd-yyyy)",
    "02.09.19 (mm.dd.yy)",
    "02-09-19 (mm-dd-yy)",
  ],
  __formatTimerStrings: [
    "일/시/분/초",
    "D/H/M/S",
    "d/h/m/s",
    "Day/Hour/Min/Sec",
    "day/hour/min/sec",
    "Day/Hour/Minute/Second",
  ],

  /*--------------------------------------------------------*/

  formatDDay: "D-9 (D-%d)",
  formatDate: "2019.2.9 (yyyy.m.d)",
  formatTimerString: "일/시/분/초",
}

export const mutations = {
  UPDATE_FORMAT(state, { attr, value }) {
    state[attr] = value
  },

  RESET_FORMAT(state, { formatDDay, formatDate, formatTimerString }) {
    state.formatDDay = formatDDay
    state.formatDate = formatDate
    state.formatTimerString = formatTimerString
  },
}

export const actions = {
  updateFormat({ commit }, { attr, value }) {
    commit("UPDATE_FORMAT", { attr, value })

    // console.log(`formats/UPDATE_FORMAT
    // state[${attr}] = ${value}`)
  },

  resetFormats({ commit }, { formatDDay, formatDate, formatTimerString }) {
    commit("RESET_FORMAT", { formatDDay, formatDate, formatTimerString })

    // console.log(`formats/RESET_FORMAT
    // state.formatDDay = ${formatDDay}
    // state.formatDate = ${formatDate}
    // state.formatTimerString = ${formatTimerString}`)
  },
}
