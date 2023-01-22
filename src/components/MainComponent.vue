<template>
   <div id="hero-container" class="col-12 col-md-6 py-5 px-5 d-flex flex-column justify-content-between">
      <div>
         <h1>Hello</h1>
         <p>I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations. <i>SelfImproving</i> founder and <i>FeedingCats</i> contributor. :)</p>
      </div>
      <NavBar />
   </div>
</template>

<script>
   import NavBar from './NavBar.vue';

   export default {
      components: { 
         NavBar
      }
   }
</script>

<style lang="scss">
   #hero-container {
      background-color: #f2f2f2;

      h1 {
         font-size: 3rem;
      }
   }
</style>