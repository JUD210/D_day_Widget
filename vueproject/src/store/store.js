import Vue from "vue"
import Vuex from "vuex"

import * as exams from "./modules/exams"
import * as format from "./modules/format"
import * as style from "./modules/style"
import * as animation from "./modules/animation"

import firebase from "firebase/app"
import "firebase/database"
// import firebase from "firebase"
// import "firebase/firestore"

import config from "./config"

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

Vue.use(Vuex)

var database = firebase.database()
// var database = firebase.firestore()

export default new Vuex.Store({
  modules: {
    exams,
    format,
    style,
    animation,
  },
  state: {
    uniqueId: "",
  },
  mutations: {
    NEW_UNIQUE_ID(state) {
      state.uniqueId = ""
      let possible = "abcdefghijklmnopqrstuvwxyz0123456789"

      state.uniqueId = ""
      for (let i = 0; i < 20; i++) {
        state.uniqueId += possible.charAt(
          Math.floor(Math.random() * possible.length),
        )
      }
    },
    UPDATE_UNIQUE_ID(state, uniqueId) {
      state.uniqueId = uniqueId
    },
  },
  actions: {
    saveWidgetData({ state, getters }) {
      console.log(getters.getWidgetData)
      alert(
        `Success! Copy and paste this url: http://www.test.com/${
          state.uniqueId
        }`,
      )

      // !REVIEW
      // database
      //   .doc(`d_day_widgets/${state.uniqueId}`)
      //   .set(getters.getWidgetData)
      //   .then(() => console.log("SUCCESS!"))
      //   .catch(error => {
      //     console.log(`Got an Error: ${error}`)
      //   })

      database.ref(`d_day_widgets/${state.uniqueId}`).set(getters.getWidgetData)
    },
    loadWidgetData({ state, commit }) {
      database
        .ref(`d_day_widgets/${state.uniqueId}`)
        .once("value")
        .then(snapshot => {
          var newData = snapshot.val()
          commit("RESET_EXAMS", newData.exams)
          commit("RESET_FORMAT", newData.format)
          commit("RESET_STYLE", { target: "title", style: newData.style.title })
          commit("RESET_STYLE", { target: "dday", style: newData.style.dday })
          commit("RESET_STYLE", { target: "date", style: newData.style.date })
          commit("RESET_ANIMATION", newData.animation)
        })
        .catch(() => {
          alert("There is no matching ID!")
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
          dday: state.format.dday,
          date: state.format.date,
        },
        style: {
          title: { ...state.style.title },
          dday: { ...state.style.dday },
          date: { ...state.style.date },
        },
        animation: {
          type: state.animation.type,
          speed: state.animation.speed,
          interval: state.animation.interval,
        },
      }
    },
  },
})
