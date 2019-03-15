export const namespaced = true

export const state = {
  formatDDays: [
    "D-9 (D-%d)",
    "D 9 (D %d)",
    "D-day 9 (D-day %d)",
    "D day 9 (D day %d)",

    "D-09 (D-%dd)",
    "D 09 (D %dd)",
    "D-day 09 (D-day %dd)",
    "D day 09 (D day %dd)",
  ],
  formatDates: [
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
  formatTimerStrings: [
    "일/시/분/초",
    "D/H/M/S",
    "d/h/m/s",
    "Day/Hour/Min/Sec",
    "day/hour/min/sec",
    "Day/Hour/Minute/Second",
  ],

  formatDDay: "D-9 (D-%d)",
  formatDate: "2019.2.9 (yyyy.m.d)",
  formatTimerString: "일/시/분/초",
}

export const mutations = {
  UPDATE_FORMAT(state, { attr, value }) {
    state[attr] = value
  },

  RESET_FORMAT(state, { formatDDay, formatDate }) {
    state.formatDDay = formatDDay
    state.formatDate = formatDate
  },
}

export const actions = {
  updateFormat({ commit }, { attr, value }) {
    commit("UPDATE_FORMAT", { attr, value })

    console.log(`formats/UPDATE_FORMAT
    state[${attr}] = ${value}`)
  },

  resetFormat({ commit }, { formatDDay, formatDate }) {
    commit("RESET_FORMAT", { formatDDay, formatDate })

    console.log(`formats/RESET_FORMAT
    state.formatDDay = ${formatDDay}
    state.formatDate = ${formatDate}`)
  },
}
