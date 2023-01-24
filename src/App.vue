<template>
  <div id="app" class="container-fluid">
    <div class="row" id="main-wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
      
      #main-wrapper {
        height: 100vh;
      }
    }

}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}
</style>
