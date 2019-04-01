<template>
  <div>
    <div class="common">
      <NavBar></NavBar>
      <Breadcrumbs></Breadcrumbs>
    </div>

    <div class="page-selected">
      <Introduction></Introduction>
      <ExamsSetting></ExamsSetting>
      <StylesSetting></StylesSetting>
      <FormatsSetting></FormatsSetting>
      <AnimationsSetting></AnimationsSetting>

      <!-- // @T Seperate UniqueIdController -->
      <UniqueIdController></UniqueIdController>
    </div>

    <input type="text" id="copy_url" :value="url" readonly />

    <div
      v-if="showSwitches"
      class="switchesContainer"
      :class="{ 'switchesContainer--activated': showSwitches }"
    >
      <button class="hide-btn toggle-btn" @click="showSwitches = !showSwitches">
        숨기기
      </button>

      <p class="header">ON / OFF</p>

      <div class="switch-main">
        <input
          type="checkbox"
          @click="updateOnOffSwitches('useDDWDDayPart')"
          :checked="useDDWDDayPart"
        />
        <label>D-day</label>

        <div switch-sub-container>
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

      <p v-if="useDDWDDayPart" class="status">
        {{
          `${getWidgetSize["ddw"]["width"]}&nbsp; | &nbsp;${
            getWidgetSize["ddw"]["height"]
          }`
        }}
      </p>

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

      <p v-if="useDDWTimerPart" class="status">
        {{
          `${getWidgetSize["timer"]["width"]}&nbsp; | &nbsp;${
            getWidgetSize["timer"]["height"]
          }`
        }}
      </p>
    </div>

    <div
      v-if="!showSwitches"
      class="switchesContainer"
      :class="{ 'switchesContainer--deactivated': !showSwitches }"
    >
      <button class="show-btn toggle-btn" @click="showSwitches = !showSwitches">
        보이기
      </button>
    </div>

    <div class="preview">
      <div v-show="showPreview">
        <DDayWidget class="widget"></DDayWidget>
      </div>

      <div class="toggle-btns">
        <button
          class="hide-btn"
          v-if="showPreview"
          @click="showPreview = !showPreview"
        >
          숨기기
        </button>

        <button
          class="show-btn"
          v-if="!showPreview"
          @click="showPreview = !showPreview"
        >
          보이기
        </button>
      </div>
    </div>

    <BasePageBtns></BasePageBtns>
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/DDayWidgetGenerator.css"

import NavBar from "@/components/common/NavBar.vue"
import Breadcrumbs from "@/components/common/Breadcrumbs.vue"

import UniqueIdController from "@/components/common/UniqueIdController.vue"

import Introduction from "@/components/d_day_widget/intro/Introduction.vue"

import ExamsSetting from "@/components/d_day_widget/setting/ExamsSetting.vue"
import StylesSetting from "@/components/d_day_widget/setting/StylesSetting.vue"
import FormatsSetting from "@/components/d_day_widget/setting/FormatsSetting.vue"
import AnimationsSetting from "@/components/d_day_widget/setting/AnimationsSetting.vue"

import DDayWidget from "@/components/d_day_widget/output/DDayWidget.vue"

import { mapState, mapActions, mapGetters } from "vuex"

import firebase from "firebase/app"
import "firebase/database"

export default {
  name: "app",

  components: {
    NavBar,
    Breadcrumbs,

    UniqueIdController,

    Introduction,

    ExamsSetting,
    StylesSetting,
    FormatsSetting,
    AnimationsSetting,

    DDayWidget,
  },

  data() {
    return {
      showPreview: true,
      showSwitches: true,
    }
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
    ...mapGetters("pageData", ["getCurrentPage"]),
    ...mapGetters(["getWidgetSize"]),

    url() {
      return `https://jud210.github.io/gongbang-helper/#/ddw/${this.uniqueId}`
    },
  },

  methods: {
    ...mapActions(["loadWidgetData"]),

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
            localStorage["requireReloadWhenLoading"] = "no"
            this.loadWidgetData()
          }
        })
    }
  },
}
</script>
