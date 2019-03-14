<template>
  <div class="navBar">
    <h1 class="title">GongBang Helper v0.01</h1>

    <nav class="links">
      <router-link :to="{ name: 'd-day-widget-generator' }"
        >D-day 위젯</router-link
      >
      <a onclick="alert('제작중입니다.')">(제작중) 타이머</a>
      <a onclick="alert('제작중입니다.')">(제작중) 자막</a>
    </nav>
  </div>
</template>

<script>
import "@/assets/css/common/NavBar.css"

export default {}
</script>
