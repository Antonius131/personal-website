<template>
  <div id="app" class="container">
    <div class="row" id="main-content">
      <MainComponent />
    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    
    #app {
      font-family: "Work Sans", sans-serif;
      color: #2c3e50;

      #main-content {
        height: 100vh;
      }
    }
}
</style>
