<template>
   <div id="hero" class="row flex-column justify-content-between">
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
</template>

<script>
import NavBar from '../mobile/NavBar';
import Footer from '../mobile/Footer';

   export default {
      components: {
         NavBar,
         Footer
      }
   }
</script>

<style scoped lang="scss">
   #hero {
      padding: 7rem 12rem;
      height: 100vh;
      background-color: #f2f2f2;
   }
</style>