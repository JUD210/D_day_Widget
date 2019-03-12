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
      title: "시험명",
      date: date,
    },
  ],
}

export const mutations = {
  ADD_EXAM(state) {
    state.exams.push({ title: "", date: "" })
  },
  REMOVE_EXAM(state, index) {
    state.exams.splice(index, 1)
  },
  UPDATE_EXAM_TITLE(state, { index, title }) {
    state.exams[index].title = title
  },
  UPDATE_EXAM_DATE(state, { index, date }) {
    state.exams[index].date = date
  },
  RESET_EXAMS(state, exams) {
    state.exams = [...exams]
  },
}

export const actions = {
  addExam({ commit }) {
    commit("ADD_EXAM")
  },
}

export const getters = {
  getExamTitleById: state => id => {
    return state.exams[id].title
  },
  getExamDateById: state => id => {
    return state.exams[id].date
  },
}
