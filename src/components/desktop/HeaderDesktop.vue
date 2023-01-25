<template>
   <div id="hero" class="row flex-column justify-content-between">
      <div class="col-12">
         <h1>Hello</h1>
         <p>I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations. <i>SelfImproving</i> founder and <i>FeedingCats</i> contributor. :)</p>
      </div>
      <div class="col-12">
         <nav class="navbar">
            <ul class="navbar-nav">
               <NavItems v-for="(item, index) in navItems" :key="index" 
                  :item = "item"
               />
            </ul>
         </nav>
         <hr class="my-4">
         <Footer />
      </div>
   </div>
</template>

<script>
import Footer from '../mobile/Footer';
import NavItems from '../mobile/NavItems';

   export default {
      components: {
         NavItems,
         Footer
      },
      data() {
         return {
            navItems: [
               {
                  path: '/desktop/works/',
                  text: 'Look at',
                  insideLink: 'my works'
               },
               {
                  path: '/desktop/about/',
                  text: 'Something',
                  insideLink: 'about Me'
               },
               {
                  path: '/desktop/skills/',
                  text: 'My',
                  insideLink: 'skills'
               }
            ]
         }
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