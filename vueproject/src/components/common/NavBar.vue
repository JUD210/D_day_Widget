<template>
  <div class="top">
    <h1 class="title">GongBang Helper v0.01</h1>
    <nav class="navbar">
      <a href="">D-day 위젯</a>
      <a onclick="alert('제작중입니다.')">(제작중) 타이머</a>
      <a onclick="alert('제작중입니다.')">(제작중) 자막</a>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0px;
  width: 100%;
}

.top .title {
  color: white;
  text-align: center;
  line-height: 10px;
  font-size: 40px;
}
.top .navbar {
  border-top-style: solid;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 1px;
  line-height: 10px;
  text-align: center;
}

.top .navbar a {
  display: inline-block;
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

.top .navbar a:hover {
  background: #ddd;
  color: black;
}
</style>
