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
  UPDATE_ONOFFSWITCHES(state, { attr }) {
    state[attr] = !state[attr]
  },

  RESET_ONOFFSWITCHES(state, onOffSwitches) {
    for (let target in state) {
      if (target.slice(0, 2) !== "__") {
        if (state[target].constructor === Object) {
          for (let attr in state[target]) {
            if (onOffSwitches[target][attr] !== undefined) {
              state[target][attr] = onOffSwitches[target][attr]
            }
          }
        } else {
          if (onOffSwitches[target] !== undefined) {
            state[target] = onOffSwitches[target]
          }
        }
      }
    }

    // state.useDDWDDayPart = useDDWDDayPart
    // state.useDDWDDayPartTitle = useDDWDDayPartTitle
    // state.useDDWDDayPartDDay = useDDWDDayPartDDay
    // state.useDDWDDayPartDate = useDDWDDayPartDate

    // state.useDDWTimerPart = useDDWTimerPart
    // state.useDDWTimerPartNumber = useDDWTimerPartNumber
    // state.useDDWTimerPartNumberString = useDDWTimerPartNumberString
  },
}

export const actions = {
  updateOnOffSwitches({ commit }, { attr }) {
    commit("UPDATE_ONOFFSWITCHES", { attr })

    // console.log(`onOffSwitches/UPDATE_ONOFFSWITCHES
    // state[${attr}] = ${!state[attr]}`)
  },

  resetOnOffSwitches({ commit }, onOffSwitches) {
    commit("RESET_ONOFFSWITCHES", onOffSwitches)

    // console.log(`onOffSwitches/RESET_ONOFFSWITCHES
    // state.useDDWDDayPart = ${useDDWDDayPart}
    // state.useDDWDDayPartTitle = ${useDDWDDayPartTitle}
    // state.useDDWDDayPartDDay = ${useDDWDDayPartDDay}
    // state.useDDWDDayPartDate = ${useDDWDDayPartDate}

    // state.useDDWTimerPart = ${useDDWTimerPart}
    // state.useDDWTimerPartNumber = ${useDDWTimerPartNumber}
    // state.useDDWTimerPartNumberString = ${useDDWTimerPartNumberString}`)
  },
}
