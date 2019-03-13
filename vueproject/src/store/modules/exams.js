export const namespaced = true

const d = new Date()
let date = ""
if (d.getUTCMonth() + 1 < 10) {
  date += `${d.getUTCFullYear()}-0${d.getUTCMonth() + 1}-${d.getUTCDate()}`
} else {
  date += `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
}

export const state = {
  exams: [
    {
      examTitle: "시험명",
      examDate: date,
    },
  ],
}

export const mutations = {
  ADD_EXAM(state) {
    state.exams.push({ examTitle: "", examDate: "" })
  },
  UPDATE_EXAM(state, { index, attr, data }) {
    console.log(index, attr, data)
    console.log(state.exams[index][attr])
    state.exams[index][attr] = data
    console.log(state.exams[index][attr])
  },
  REMOVE_EXAM(state, index) {
    state.exams.splice(index, 1)
  },

  RESET_EXAMS(state, exams) {
    state.exams = [...exams]
  },
}

export const actions = {
  addExam({ commit }) {
    commit("ADD_EXAM")
  },

  updateExam({ commit }, { index, attr, data }) {
    commit("UPDATE_EXAM", { index, attr, data })
  },

  removeExam({ commit }, index) {
    commit("REMOVE_EXAM", index)
  },

  resetExams({ commit }, exams) {
    commit("RESET_EXAMS", exams)
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
