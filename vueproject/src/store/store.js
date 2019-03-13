import Vue from "vue"
import Vuex from "vuex"

import * as uniqueId from "./modules/uniqueId"

import * as exams from "./modules/exams"
import * as format from "./modules/format"
import * as style from "./modules/style"
import * as animation from "./modules/animation"

import firebase from "firebase/app"
import "firebase/database"

import config from "./config"

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

Vue.use(Vuex)

var database = firebase.database()

export default new Vuex.Store({
  modules: {
    uniqueId,

    exams,
    format,
    style,
    animation,
  },

  actions: {
    saveWidgetData({ state, getters }) {
      database
        .ref(`${state.uniqueId.uniqueId}/d_day_widget`)
        .set(getters.getWidgetData)
        .then(() => {
          alert(
            `저장 완료! 오른쪽 URL을 복사해서 사용하시면 됩니다. : http://www.test.com/${
              state.uniqueId.uniqueId
            }`,
          )
          console.log("[Success] saveWidgetData from getters.getWidgetData")
          console.log(getters.getWidgetData)
        })
        .catch(error => {
          alert(`오류 발생! 제 연락처로 문의해주세요. ${error}`)
        })
    },
    loadWidgetData({ state, dispatch }) {
      if (!/^([a-z0-9]+)$/.test(state.uniqueId.uniqueId)) {
        alert(
          "유효한 키값이 아닙니다! 키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)",
        )
        return 0
      }

      database
        .ref(`${state.uniqueId.uniqueId}/d_day_widget`)
        .once("value")
        .then(snapshot => {
          var newData = snapshot.val()
          console.log("[Success] loadWidgetData from snapshot.val()")
          console.log(newData)

          dispatch("exams/resetExams", newData.exams)
          dispatch("format/resetFormat", newData.format)
          dispatch("style/resetStyle", {
            target: "titleStyle",
            style: newData.style.titleStyle,
          })
          dispatch("style/resetStyle", {
            target: "ddayStyle",
            style: newData.style.ddayStyle,
          })
          dispatch("style/resetStyle", {
            target: "dateStyle",
            style: newData.style.dateStyle,
          })
          dispatch("animation/resetAnimation", newData.animation)
        })
        .catch(err => {
          alert(`입력된 키 값과 일치하는 데이터가 없습니다!
키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)
${state.uniqueId.uniqueId}`)
          console.log(err)
        })
    },
  },
  getters: {
    getWidgetData(state) {
      var exams = []
      for (let i in state.exams.exams) {
        exams.push({ ...state.exams.exams[i] })
      }
      return {
        exams,
        format: {
          ddayFormat: state.format.ddayFormat,
          dateFormat: state.format.dateFormat,
        },
        style: {
          titleStyle: { ...state.style.titleStyle },
          ddayStyle: { ...state.style.ddayStyle },
          dateStyle: { ...state.style.dateStyle },
        },
        animation: {
          type: state.animation.type,
          transition: state.animation.transition,
          interval: state.animation.interval,
        },
      }
    },
  },
})
