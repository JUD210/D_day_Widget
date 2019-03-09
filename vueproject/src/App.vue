<template>
  <div id="app">
    <div class="common">
      <NavBar></NavBar>
    </div>

    <div class="d_day_widget result">
      <DDayWidgetGenerator></DDayWidgetGenerator>
    </div>

    <div class="d_day_widget intro">
      <Description></Description>
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget input">
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
import Description from "@/components/d_day_widget/intro/Description.vue"

import UniqueIdLoader from "@/components/d_day_widget/input/UniqueIdLoader.vue"
import SettingList from "@/components/d_day_widget/input/SettingList.vue"

import DDayWidgetGenerator from "@/components/d_day_widget/result/DDayWidgetGenerator.vue"

import { mapActions } from "vuex"

export default {
  name: "app",
  components: {
    // common
    NavBar,

    // d_day_widget
    Description,

    UniqueIdLoader,
    SettingList,

    DDayWidgetGenerator,
  },
  methods: mapActions(["saveWidgetData"]),
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 100px;
}

html {
  /* Chrome, Safari, Opera */
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  /* Firefox */
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
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

h3 {
  font-size: 25px;
  font-weight: normal;
  margin: 15px;
  margin-top: 0px;
}

.inputForm {
  margin: auto;
  width: 550px;
  /* padding: 20px; */
  background-color: rgb(250, 250, 250);
}

.inputLine {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 20px;
}

label {
  padding: 8px;
}

button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

label {
  width: 200px;
  text-align: left;
}

input,
select {
  width: 300px;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
</style>
