<template>
   <div id="wrapper" class="py-5 px-5">
      <div class="row d-flex h-100 flex-column justify-content-between">
         <div class="col-12">
            <h1>Hello</h1>
            <p>I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations. <i>SelfImproving</i> founder and <i>FeedingCats</i> contributor. :)</p>
         </div>
         <div class="col-12">
            <NavBar />
            <hr class="my-4">
            <Footer />
         </div>
      </div>
   </div>
</template>

<script>
   import NavBar from './NavBar.vue';
   import Footer from './Footer.vue';

   export default {
      components: { 
         NavBar,
         Footer
      }
   }
</script>

<style scoped lang="scss">
   #wrapper {
      background-color: #f2f2f2;

      h1 {
         font-size: 3rem;
      }
   }
</style>