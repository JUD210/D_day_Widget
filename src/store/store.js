import Vue from "vue"
import Vuex from "vuex"

import * as uniqueId from "./modules/uniqueId"

import * as exams from "./modules/exams"
import * as styles from "./modules/styles"
import * as formats from "./modules/formats"
import * as animations from "./modules/animations"

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
    styles,
    formats,
    animations,
  },

  state: {
    // If I decide to change these sources to private,
    // I'll attach below state and script to all console.logs
    //
    // isDebug: false,
    // if(rootState.isDebug) { console.log ( ... )}
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
          console.log(`store/saveWidgetData [OK]
          ${JSON.stringify(getters.getWidgetData)}`)
        })
        .catch(error => {
          alert(`오류 발생! 제 연락처로 문의해주세요. ${error}`)

          console.log(`store/saveWidgetData [ERROR]
          ${error}`)
        })
    },
    loadWidgetData({ state, dispatch }) {
      if (!/^([a-z0-9]+)$/.test(state.uniqueId.uniqueId)) {
        alert(
          "유효한 키값이 아닙니다! 키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)",
        )
        return "error"
      }

      database
        .ref(`${state.uniqueId.uniqueId}/d_day_widget`)
        .once("value")
        .then(snapshot => {
          var newData = snapshot.val()

          dispatch("exams/resetExams", newData.exams)
          dispatch("styles/resetStyle", {
            target: "styleDDWDDayPartTitle",
            styleDDWObject: newData.styles.styleDDayPartTitle,
          })
          dispatch("styles/resetStyle", {
            target: "styleDDWDDayPartDDay",
            styleDDWObject: newData.styles.styleDDayPartDDay,
          })
          dispatch("styles/resetStyle", {
            target: "styleDDWDDayPartDate",
            styleDDWObject: newData.styles.styleDDayPartDate,
          })
          dispatch("formats/resetFormat", newData.formats)
          dispatch("animations/resetAnimation", newData.animations)

          console.log(`store/loadWidgetData [OK]
          ${JSON.stringify(newData)}`)
        })
        .catch(error => {
          alert(`입력된 키 값과 일치하는 데이터가 없습니다!
키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)
${state.uniqueId.uniqueId}`)

          console.log(`store/loadWidgetData [ERROR]
          ${error}`)
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
        styles: {
          styleDDWDDayPartTitle: { ...state.styles.styleDDayPartTitle },
          styleDDWDDayPartDDay: { ...state.styles.styleDDayPartDDay },
          styleDDWDDayPartDate: { ...state.styles.styleDDayPartDate },
        },
        formats: {
          formatDDay: state.formats.formatDDay,
          formatDate: state.formats.formatDate,
        },
        animations: {
          animationType: state.animations.animationType,
          animationTransition: state.animations.animationTransition,
          animationInterval: state.animations.animationInterval,
        },
      }
    },
  },
})
