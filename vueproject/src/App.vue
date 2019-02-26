<template>
  <div id="app">
    <UniqueIdLoader></UniqueIdLoader>
    <SettingList></SettingList>
    <button @click="saveWidgetData">Save</button>
  </div>
</template>

<script>
import UniqueIdLoader from './components/UniqueIdLoader.vue'
import SettingList from './components/SettingList.vue'

import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    SettingList,
    UniqueIdLoader,
  },
  methods: mapActions(['saveWidgetData']),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
