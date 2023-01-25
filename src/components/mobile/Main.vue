<template>
   <div id="wrapper" class="py-5 px-5">
      <div class="row d-flex h-100 flex-column justify-content-between">
         <div class="col-12">
            <h1>Hello</h1>
            <p>I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations. <i>SelfImproving</i> founder and <i>FeedingCats</i> contributor. :)</p>
         </div>
         <div class="col-12">
            <nav class="navbar">
               <ul class="navbar-nav">
                  <NavItems v-for="(item, index) in navItems" :key="index" 
                     :item = "item"/>
               </ul>
            </nav>
            <hr class="my-4">
            <Footer />
         </div>
      </div>
   </div>
</template>

<script>
   import NavItems from './NavItems';
   import Footer from './Footer';

   export default {
      components: { 
         NavItems,
         Footer
      },
      data() {
         return {
            navItems: [
               {
                  path: '/mobile/works/',
                  text: 'Look at',
                  insideLink: 'my works'
               },
               {
                  path: '/mobile/about/',
                  text: 'Something',
                  insideLink: 'about Me'
               },
               {
                  path: '/mobile/skills/',
                  text: 'My',
                  insideLink: 'skills'
               }
            ]
         }
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