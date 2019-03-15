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

    <!-- //! CONTINUE  -->
    <!-- <transition name="fade"> -->
    <div class="preview">
      <button @click="showPreview = !showPreview">
        Toggle
      </button>
      <DDayWidget v-if="showPreview"></DDayWidget>
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
    return { showPreview: true }
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

<style scoped>
/*
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



#slideSource {
  opacity: 1;
  transition: opacity 1s;
}

#slideSource.fade {
  opacity: 0;
}



.preview > button {
  text-align: right;
}
*/
</style>
