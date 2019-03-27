import Vue from "vue"
import Vuex from "vuex"

import * as uniqueId from "./modules/uniqueId"

import * as exams from "./modules/setting/exams"
import * as onOffSwitches from "./modules/setting/onOffSwitches"
import * as styles from "./modules/setting/styles"
import * as formats from "./modules/setting/formats"
import * as animations from "./modules/setting/animations"

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
    onOffSwitches,
    styles,
    formats,
    animations,
  },

  actions: {
    saveWidgetData({ state, getters }) {
      database
        .ref(`${state.uniqueId.uniqueId}/d_day_widget`)
        .set(getters.getWidgetData)
        .then(() => {
          // @T Left 세로 비율
          // @T [ManyCam 위젯 크기 추천]  Left: 400px

          alert(`URL복사 및 데이터 저장 완료!
Ctrl+V 로 웹 소스 URL에 붙여넣으시면 됩니다.
😃👍
-------------------------------------
[저장된 위젯 크기]
Left: ${getters.getVisualWidth}  |  세로: ${getters.getVisualHeight}`)
          console.log(`store/saveWidgetData [OK]
          ${JSON.stringify(getters.getWidgetData)}`)
        })
        .catch(error => {
          alert(`오류 발생! 제 연락처로 문의해주세요. 
          store -> ${error}`)

          console.log(`store/saveWidgetData [ERROR]
          ${error}`)
        })
    },
    loadWidgetData({ state, dispatch }) {
      if (!/^([a-z0-9]+)$/.test(state.uniqueId.uniqueId)) {
        alert(
          "유효한 키 값이 아닙니다! 키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)",
        )
        return "error"
      }

      database
        .ref(`${state.uniqueId.uniqueId}/d_day_widget`)
        .once("value")
        .then(snapshot => {
          var newData = snapshot.val()
          dispatch("exams/resetExams", newData.exams)
          dispatch("onOffSwitches/resetOnOffSwitches", newData.onOffSwitches)
          dispatch("styles/resetStyles", newData.styles)
          dispatch("formats/resetFormats", newData.formats)
          dispatch("animations/resetAnimations", newData.animations)

          if (localStorage["requireReloadWhenLoading"] === "yes") {
            location.reload()
          }
        })
        .catch(error => {
          alert(`입력된/저장된 키 값과 일치하는 데이터가 없습니다!
키 값을 잘못 붙여넣었는지 확인해주세요. (띄어쓰기 등)
${state.uniqueId.uniqueId}`)

          console.log(`store/loadWidgetData [ERROR]
          ${error}`)
        })
    },
  },
  getters: {
    getWidgetData(state) {
      let result = {}

      for (let mod in state) {
        if (
          [
            "exams",
            "onOffSwitches",
            "styles",
            "formats",
            "animations",
          ].includes(mod)
        ) {
          for (let target in state[mod]) {
            if (target.slice(0, 2) !== "__") {
              let temp = {}
              temp[target] = state[mod][target]

              result[mod] = { ...result[mod], ...temp }
            }
          }
        }
      }

      return result
    },

    getVisualWidth: state => {
      // @T
      let result = 0
      console.log(state)
      // let ddayPartLeftDistance = 0
      // let timerPartLeftDistance = 0

      // if (state.onOffSwitches.useDDWDDayPart) {
      //   ddayPartLeftDistance = Math.abs(
      //     state.styles.styleDDWDDayPart.left.split("px")[0],
      //   )
      // }
      // if (state.onOffSwitches.useDDWTimerPart) {
      //   timerPartLeftDistance = Math.abs(
      //     state.styles.styleDDWTimerPart.left.split("px")[0],
      //   )
      // }

      // result += Number(state.styles.styleDDW.width.split("px")[0])
      // result += Number(state.styles.styleDDW["border-width"].split("px")[0] * 2)
      // result += Math.max(ddayPartLeftDistance, timerPartLeftDistance)

      return `${result}px`
    },

    getVisualHeight: state => {
      // @T
      let result = 0
      console.log(state)

      // if (state.onOffSwitches.useDDWDDayPart) {
      //   result += Number(state.styles.styleDDWDDayPart.height.split("px")[0])
      // }
      // if (state.onOffSwitches.useDDWTimerPart) {
      //   result += Number(state.styles.styleDDWTimerPart.height.split("px")[0])
      // }
      // result += Number(state.styles.styleDDW["border-width"].split("px")[0] * 2)

      return `${result}px`
    },
  },
})

// return {
//   exams: state.exams.exams,
//   onOffSwitches: {
//     useDDWDDayPart: state.onOffSwitches.useDDWDDayPart,
//     useDDWDDayPartTitle: state.onOffSwitches.useDDWDDayPartTitle,
//     useDDWDDayPartDDay: state.onOffSwitches.useDDWDDayPartDDay,
//     useDDWDDayPartDate: state.onOffSwitches.useDDWDDayPartDate,
//     useDDWTimerPart: state.onOffSwitches.useDDWTimerPart,
//     useDDWTimerPartNumber: state.onOffSwitches.useDDWTimerPartNumber,
//     useDDWTimerPartNumberString:
//       state.onOffSwitches.useDDWTimerPartNumberString,
//   },
//   styles: {
//     styleDDWDDayPart: state.styles.styleDDWDDayPart,
//     styleDDWDDayPartTitle: state.styles.styleDDWDDayPartTitle,
//     styleDDWDDayPartDDay: state.styles.styleDDWDDayPartDDay,
//     styleDDWDDayPartDate: state.styles.styleDDWDDayPartDate,
//     styleDDWTimerPart: state.styles.styleDDWTimerPart,
//     styleDDWTimerPartNumber: state.styles.styleDDWTimerPartNumber,
//     styleDDWTimerPartNumberString:
//       state.styles.styleDDWTimerPartNumberString,
//   },
//   formats: {
//     formatDDay: state.formats.formatDDay,
//     formatDate: state.formats.formatDate,
//     formatTimerString: state.formats.formatTimerString,
//   },
//   animations: {
//     animationType: state.animations.animationType,
//     animationDuration: state.animations.animationDuration,
//     animationInterval: state.animations.animationInterval,
//   },
// }
