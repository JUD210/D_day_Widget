<template>
  <div id="app">
    <router-view class="pageRoutered" :key="$route.fullPath" />

    <!-- // @T add: Pomodoro Timer -->
    <!-- // @T add: Caption -->
  </div>
</template>

<script>
import "@/assets/css/App.css"

export default {
  name: "app",
  components: {},
}
</script>
