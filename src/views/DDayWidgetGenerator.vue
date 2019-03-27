<template>
  <div>
    <div class="common">
      <NavBar></NavBar>
    </div>

    <div class="d_day_widget d_day_widget_intro intro">
      <Description></Description>

      <!-- // @T Seperate UniqueIdLoader -->
      <br />
      <br />
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget d_day_widget_input input">
      <SettingList></SettingList>

      <button class="saveButton" @click="saveAndCopyUrl()">Save</button>

      <!-- <button @click="showResult()">Show</button> -->
    </div>

    <input type="text" id="copy_url" :value="url" readonly />

    <div class="switchesContainer" v-if="showSwitches">
      <button class="hideButton" @click="showSwitches = !showSwitches">
        숨기기
      </button>

      <p>ON / OFF</p>

      <div class="switch-main">
        <input
          type="checkbox"
          @click="updateOnOffSwitches('useDDWDDayPart')"
          :checked="useDDWDDayPart"
        />
        <label>D-Day</label>

        <div>
          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateOnOffSwitches('useDDWDDayPartTitle')"
              :checked="useDDWDDayPartTitle"
            />
            <label>제목</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateOnOffSwitches('useDDWDDayPartDDay')"
              :checked="useDDWDDayPartDDay"
            />
            <label>일수</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateOnOffSwitches('useDDWDDayPartDate')"
              :checked="useDDWDDayPartDate"
            />
            <label>날짜</label>
          </div>
        </div>
      </div>

      <div class="switch-main">
        <input
          type="checkbox"
          @click="updateOnOffSwitches('useDDWTimerPart')"
          :checked="useDDWTimerPart"
        />
        <label>타이머</label>

        <div>
          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateOnOffSwitches('useDDWTimerPartNumber')"
              :checked="useDDWTimerPartNumber"
            />
            <label>숫자</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateOnOffSwitches('useDDWTimerPartNumberString')"
              :checked="useDDWTimerPartNumberString"
            />
            <label>글자</label>
          </div>
        </div>
      </div>
    </div>

    <div class="switchesContainer" v-if="!showSwitches">
      <button class="showButton" @click="showSwitches = !showSwitches">
        보이기
      </button>
    </div>

    <div class="preview">
      <button
        class="hideButton"
        v-if="showPreview"
        @click="showPreview = !showPreview"
      >
        숨기기
      </button>

      <button
        class="showButton"
        v-if="!showPreview"
        @click="showPreview = !showPreview"
      >
        보이기
      </button>

      <div v-show="showPreview">
        <DDayWidget class="widget"></DDayWidget>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/DDayWidgetGenerator.css"

import NavBar from "@/components/common/NavBar.vue"

import Description from "@/components/d_day_widget/intro/Description.vue"

import UniqueIdLoader from "@/components/d_day_widget/input/UniqueIdLoader.vue"
import SettingList from "@/components/d_day_widget/input/SettingList.vue"

import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"

import { mapState, mapActions } from "vuex"

import firebase from "firebase/app"
import "firebase/database"

export default {
  name: "app",

  components: {
    NavBar,

    Description,

    UniqueIdLoader,
    SettingList,

    DDayWidget,
  },

  data() {
    return { showPreview: true, showSwitches: true }
  },
  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    ...mapState("onOffSwitches", [
      "useDDWDDayPart",
      "useDDWDDayPartTitle",
      "useDDWDDayPartDDay",
      "useDDWDDayPartDate",
      "useDDWTimerPart",
      "useDDWTimerPartNumber",
      "useDDWTimerPartNumberString",
    ]),

    url() {
      return `https://jud210.github.io/gongbang-helper/#/ddw/${this.uniqueId}`
    },
  },

  methods: {
    saveAndCopyUrl() {
      this.saveWidgetData()
      this.copyText()
    },
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
    },

    formattedUse(bool) {
      if (bool) {
        return "O"
      } else {
        return "X"
      }
    },

    updateOnOffSwitches(attr) {
      this.$store.dispatch("onOffSwitches/updateOnOffSwitches", { attr })
    },
    ...mapActions(["saveWidgetData", "loadWidgetData"]),

    // showResult() {
    //   this.$router.push({
    //     name: "d-day-widget-show",
    //     params: { id: this.uniqueId },
    //   })
    // },
  },

  mounted() {
    if (localStorage["uniqueId"] !== undefined) {
      firebase
        .database()
        .ref()
        .once("value")
        .then(snapshot => {
          var newData = snapshot.val()

          if (newData[localStorage["uniqueId"]] !== undefined) {
            this.loadWidgetData()
          }
        })
    }
  },
}
</script>
