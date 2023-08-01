<script setup lang="ts">

</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
html {
  height: 100%;
  background-image: -webkit-radial-gradient(ellipse farthest-corner at center center, #1b44e4 0%, #020f3a 100%);
  background-image: radial-gradient(ellipse farthest-corner at center center, #1b44e4 0%, #020f3a 100%);
  cursor: move;
}

body {
  width: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
