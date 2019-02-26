import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database'
import config from './config'

import * as exams from './modules/exams'
import * as format from './modules/format'
import * as style from './modules/style'
import * as animation from './modules/animation'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

Vue.use(Vuex)

var database = firebase.database()

export default new Vuex.Store({
  modules: {
    exams,
    format,
    style,
    animation,
  },
  state: {
    uniqueId: '',
  },
  mutations: {
    NEW_UNIQUE_ID(state) {
      state.uniqueId = ''
      let possible = 'abcdefghijklmnopqrstuvwxyz0123456789'

      state.uniqueId = ''
      for (let i = 0; i < 6; i++) {
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
      database.ref('widgets/' + state.uniqueId).set(getters.getWidgetData)
    },
    loadWidgetData({ state, commit }) {
      database
        .ref('widgets/' + state.uniqueId)
        .once('value')
        .then(snapshot => {
          var newData = snapshot.val()
          commit('RESET_EXAMS', newData.exams)
          commit('RESET_FORMAT', newData.format)
          commit('RESET_STYLE', { target: 'title', style: newData.style.title })
          commit('RESET_STYLE', { target: 'dday', style: newData.style.dday })
          commit('RESET_STYLE', { target: 'date', style: newData.style.date })
          commit('RESET_ANIMATION', newData.animation)
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
