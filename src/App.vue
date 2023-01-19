<template>
  <div id="app" class="container">
    <div class="row" id="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
