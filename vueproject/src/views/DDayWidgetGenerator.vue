<template>
  <div>
    <div class="common">
      <NavBar></NavBar>
    </div>

    <div class="d_day_widget intro">
      <Description></Description>
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget input">
      <SettingList></SettingList>
      <button @click="saveWidgetData()">Save</button>
      <br /><br />
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
      이 버튼을 누르면 URL 주소값이 복사될 것이여
    </button>

    <div class="preview">
      <DDayWidget></DDayWidget>
    </div>
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

  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    url() {
      return `http://www.gongbanghelper.com/${this.uniqueId}`
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
    ...mapActions(["saveWidgetData"]),
  },
}
</script>
