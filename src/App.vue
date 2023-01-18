<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 2rem;
}

#app {
  font-family: "Work Sans", sans-serif;
  width: 100%;
  background-color: #f2f2f2;
  color: #2c3e50;
  text-align: center;
}
</style>
