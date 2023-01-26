<template>
   <transition name="fade" mode="out-in">
      <router-view />
   </transition>
</template>

<script>
export default {

}
</script>

<style>
   .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: translateX(50px);
   }

   .fade-enter-active, .fade-leave-active {
   transition: all 0.2s ease;
   }
</style>