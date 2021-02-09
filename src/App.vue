<template>
  <div id="app">
    <div id="container">
      <div class="mobilemenu__cover"></div>
      <div class="nav-trigger"></div>
      <Header></Header>
      <router-view></router-view>
      <footer>
        <div class="item">&copy; 田中 輝良</div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './assets/styles/bootstrap-reboot.css';

.content-width {
  width: 90%;
  margin: 0 auto;
  max-width: 1070px;
}

#app {
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Oswald&display=swap');
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Oswald', sans-serif;
}
#container {
  position: relative;
  background-color: #0494c5;
  transition: transform 0.5s, box-shadow 0.5s;
  height: 100vh;
}
ul {
  list-style: none;
  padding-left: 0;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: #f0eee9;

  & .item {
    font-size: 14px;
  }
}
</style>
