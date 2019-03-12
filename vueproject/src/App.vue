<template>
  <div id="app">
    <router-view :key="$route.fullPath" />

    <!-- // !TODO: Pomodoro Timer -->
    <!-- // !TODO: Caption -->
  </div>
</template>

<script>
import "@/assets/css/App.css"

export default {
  name: "app",
  components: {},
}
</script>
