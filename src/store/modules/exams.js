export const namespaced = true

const d = new Date()
let date = ""
if (d.getUTCMonth() + 1 < 10) {
  date += `${d.getUTCFullYear()}-0${d.getUTCMonth() + 1}-${d.getUTCDate()}`
} else {
  date += `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
}

export const state = {
  // @T indexSelector
  exams: [
    {
      examTitle: null,
      examDate: date,
    },
  ],
}

export const mutations = {
  ADD_EXAM(state) {
    state.exams.push({ examTitle: null, examDate: date })
  },
  UPDATE_EXAM(state, { index, attr, value }) {
    state.exams[index][attr] = value
  },
  REMOVE_EXAM(state, index) {
    state.exams.splice(index, 1)
  },

  RESET_EXAMS(state, exams) {
    state.exams = exams
  },
}

export const actions = {
  addExam({ commit }) {
    commit("ADD_EXAM")

    console.log(`exams/ADD_EXAM
    state.exams.push({ examTitle: null, examDate: ${date} })`)
  },
  updateExam({ commit }, { index, attr, value }) {
    commit("UPDATE_EXAM", { index, attr, value })

    console.log(`exams/UPDATE_EXAM
    state.exams[${index}][${attr}] = ${value}`)
  },
  removeExam({ commit }, index) {
    commit("REMOVE_EXAM", index)

    console.log(`exams/REMOVE_EXAM
    state.exams.splice(${index}, 1)`)
  },

  resetExams({ commit }, exams) {
    commit("RESET_EXAMS", exams)

    console.log(`exams/RESET_EXAMS
    state.exams = ${JSON.stringify(exams)}`)
  },
}

export const getters = {
  getExamTitleById: state => id => {
    return state.exams[id].examTitle
  },
  getExamDateById: state => id => {
    return state.exams[id].examDate
  },
}
