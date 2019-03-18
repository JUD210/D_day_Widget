<template>
  <div>
    <div class="common">
      <NavBar></NavBar>
    </div>

    <div class="d_day_widget d_day_widget_intro intro">
      <Description></Description>
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget input">
      <SettingList></SettingList>
      <button @click="saveWidgetData()">Save</button>

      <button @click="showResult()">Show</button>
    </div>

    <input
      type="text"
      id="copy_url"
      :value="url"
      style="width: 100%;"
      readonly
    />

    <button @click="copyText">
      URL 주소값 복사하기
    </button>

    <div class="switchesContainer" v-if="showSwitches">
      <button class="hideButton" @click="showSwitches = !showSwitches">
        숨기기
      </button>

      <p>ON / OFF</p>

      <div class="switch-main">
        <input
          type="checkbox"
          @click="updateUse('useDDWDDayPart')"
          :checked="useDDWDDayPart"
        />
        <label>D-Day</label>

        <div>
          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateUse('useDDWDDayPartTitle')"
              :checked="useDDWDDayPartTitle"
            />
            <label>제목</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateUse('useDDWDDayPartDDay')"
              :checked="useDDWDDayPartDDay"
            />
            <label>일수</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateUse('useDDWDDayPartDate')"
              :checked="useDDWDDayPartDate"
            />
            <label>날짜</label>
          </div>
        </div>
      </div>

      <div class="switch-main">
        <input
          type="checkbox"
          @click="updateUse('useDDWTimerPart')"
          :checked="useDDWTimerPart"
        />
        <label>타이머</label>

        <div>
          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateUse('useDDWTimerPartNumber')"
              :checked="useDDWTimerPartNumber"
            />
            <label>숫자</label>
          </div>

          <div class="switch-sub">
            <input
              type="checkbox"
              @click="updateUse('useDDWTimerPartNumberString')"
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
      return `https://jud210.github.io/GongBangHelper/${this.uniqueId}/ddw`
    },
  },

  methods: {
    showResult() {
      this.$router.push({
        name: "d-day-widget-show",
        params: { id: this.uniqueId },
      })
    },
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
      alert("Copied the text: " + copyText.value)
    },

    formattedUse(bool) {
      if (bool) {
        return "O"
      } else {
        return "X"
      }
    },

    updateUse(attr) {
      this.$store.dispatch("onOffSwitches/updateUse", { attr })
    },
    ...mapActions(["saveWidgetData"]),
  },
}
</script>
