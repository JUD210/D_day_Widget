<template>
  <div id="app">
    <router-view :key="$route.fullPath" />

    <!-- // !TODO: Pomodoro Timer -->
    <!-- // !TODO: Caption -->
  </div>
</template>

<script>
import "@/assets/css/App.css"
import "@/assets/css/d_day_widget/DDayWidget.css"

export default {
  name: "app",
  components: {},
}
</script>
