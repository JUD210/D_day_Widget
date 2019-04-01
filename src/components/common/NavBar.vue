<template>
  <div class="nav-bar">
    <h1 class="nav-bar__title">공부방송 도우미</h1>
    <h3 class="nav-bar__title-ver">v0.20</h3>

    <nav class="nav-bar__links">
      <router-link class="activated" :to="{ name: 'd-day-widget-generator' }"
        >D-day 위젯</router-link
      >
      <!-- <a onclick="alert('제작중입니다.')">(제작중) 뽀모도로 타이머</a> -->
    </nav>
  </div>
</template>

<script>
import "@/assets/css/common/NavBar.css"

export default {}
</script>
