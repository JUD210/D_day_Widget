<template>
  <div id="app">
    <div class="common">
      <NavBar></NavBar>
    </div>

    <div class="d_day_widget intro">
      <Description></Description>
    </div>

    <div class="d_day_widget input">
      <UniqueIdLoader></UniqueIdLoader>
      <SettingList></SettingList>
      <button @click="saveWidgetData">Save</button>
    </div>

    <!-- // !TODO: Pomodoro Timer -->
    <!-- // !TODO: Caption -->
  </div>
</template>

<script>
// common
import NavBar from "@/components/common/NavBar.vue"

// d_day_widget
// : intro
import Description from "@/components/d_day_widget/intro/Description.vue"

// : input
import UniqueIdLoader from "@/components/d_day_widget/input/UniqueIdLoader.vue"
import SettingList from "@/components/d_day_widget/input/SettingList.vue"

import { mapActions } from "vuex"

export default {
  name: "app",
  components: {
    // common
    NavBar,

    // d_day_widget
    // : intro
    Description,

    // : input
    UniqueIdLoader,
    SettingList,
  },
  methods: mapActions(["saveWidgetData"]),
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 100px;
}

.intro {
  margin: auto;
  width: 780px;
  padding: 20px;
  background-color: rgb(250, 250, 250);
}

.input {
  text-align: center;
}

label {
  padding: 10px;
}

.inputLine {
}
</style>
