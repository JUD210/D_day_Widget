export const namespaced = true

const d = new Date()
let date = ""
if (d.getUTCMonth() + 1 < 10) {
  date += `${d.getUTCFullYear()}-0${d.getUTCMonth() + 1}-${d.getUTCDate()}`
} else {
  date += `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
}

export const state = {
  // @T __ 붙여서 사용해!
  indexSelector: 0,

  /*--------------------------------------------------------*/

  examsData: [
    {
      examTitle: null,
      examDate: date,
    },
    {
      examTitle: null,
      examDate: `${Number(date.slice(0, 4)) + 1}${date.slice(4)}`,
    },
  ],
}

export const mutations = {
  ADD_EXAM(state) {
    state.examsData.push({ examTitle: null, examDate: date })
  },
  UPDATE_EXAM(state, { index, attr, value }) {
    state.examsData[index][attr] = value
  },
  REMOVE_EXAM(state, index) {
    state.indexSelector = 0
    state.examsData.splice(index, 1)
  },

  RESET_EXAMS(state, exams) {
    state.indexSelector = 0
    state.examsData = exams.examsData
  },

  UPDATE_INDEXSELECTOR(state, cmd) {
    if (cmd == "next") {
      state.indexSelector += 1
    } else if (cmd == "reset") {
      state.indexSelector = 0
    }
  },
}

export const actions = {
  addExam({ commit }) {
    commit("ADD_EXAM")

    // console.log(`exams/ADD_EXAM
    // state.examsData.push({ examTitle: null, examDate: ${date} })`)
  },
  updateExam({ commit }, { index, attr, value }) {
    commit("UPDATE_EXAM", { index, attr, value })

    // console.log(`exams/UPDATE_EXAM
    // state.examsData[${index}][${attr}] = ${value}`)
  },
  removeExam({ commit }, index) {
    commit("REMOVE_EXAM", index)

    // console.log(`exams/REMOVE_EXAM
    // state.examsData.splice(${index}, 1)`)
  },

  resetExams({ commit }, exams) {
    commit("RESET_EXAMS", exams)

    // console.log(`exams/RESET_EXAMS
    // state.examsData = ${JSON.stringify(exams)}`)
  },

  updateIndexSelector({ commit }, cmd) {
    commit("UPDATE_INDEXSELECTOR", cmd)

    // console.log(`exams/UPDATE_INDEXSELECTOR
    // ${cmd} state.indexSelector`)
  },
}

export const getters = {
  getExamTitleById: state => id => {
    return state.examsData[id].examTitle
  },
  getExamDateById: state => id => {
    return state.examsData[id].examDate
  },
}
