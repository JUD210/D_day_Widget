export const namespaced = "true"

export const state = {
  useDDWDDayPart: true,
  useDDWDDayPartTitle: true,
  useDDWDDayPartDDay: true,
  useDDWDDayPartDate: true,

  useDDWTimerPart: true,
  useDDWTimerPartNumber: true,
  useDDWTimerPartNumberString: true,
}

export const mutations = {
  UPDATE_USE(state, { attr }) {
    state[attr] = !state[attr]
  },

  RESET_USE(
    state,
    {
      useDDWDDayPart,
      useDDWDDayPartTitle,
      useDDWDDayPartDDay,
      useDDWDDayPartDate,

      useDDWTimerPart,
      useDDWTimerPartNumber,
      useDDWTimerPartNumberString,
    },
  ) {
    state.useDDWDDayPart = useDDWDDayPart
    state.useDDWDDayPartTitle = useDDWDDayPartTitle
    state.useDDWDDayPartDDay = useDDWDDayPartDDay
    state.useDDWDDayPartDate = useDDWDDayPartDate

    state.useDDWTimerPart = useDDWTimerPart
    state.useDDWTimerPartNumber = useDDWTimerPartNumber
    state.useDDWTimerPartNumberString = useDDWTimerPartNumberString
  },
}

export const actions = {
  updateUse({ commit }, { attr }) {
    commit("UPDATE_USE", { attr })

    console.log(`onOffSwitches/UPDATE_USE
    state[${attr}] = ${!state[attr]}`)
  },

  resetUses(
    { commit },
    {
      useDDWDDayPart,
      useDDWDDayPartTitle,
      useDDWDDayPartDDay,
      useDDWDDayPartDate,

      useDDWTimerPart,
      useDDWTimerPartNumber,
      useDDWTimerPartNumberString,
    },
  ) {
    commit("RESET_USE", {
      useDDWDDayPart,
      useDDWDDayPartTitle,
      useDDWDDayPartDDay,
      useDDWDDayPartDate,

      useDDWTimerPart,
      useDDWTimerPartNumber,
      useDDWTimerPartNumberString,
    })

    console.log(`onOffSwitches/RESET_USE
    state.useDDWDDayPart = ${useDDWDDayPart}
    state.useDDWDDayPartTitle = ${useDDWDDayPartTitle}
    state.useDDWDDayPartDDay = ${useDDWDDayPartDDay}
    state.useDDWDDayPartDate = ${useDDWDDayPartDate}

    state.useDDWTimerPart = ${useDDWTimerPart}
    state.useDDWTimerPartNumber = ${useDDWTimerPartNumber}
    state.useDDWTimerPartNumberString = ${useDDWTimerPartNumberString}`)
  },
}
