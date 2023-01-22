<template>
   <nav class="navbar">
      <ul class="navbar-nav">
         <li v-for="item in navItems" :key="item.id">
            {{ item.text }}
            <router-link :to="item.path">
               {{ item.insideLink }}
            </router-link>
         </li>
      </ul>
   </nav>
</template>

<script>
   export default {
      name: 'NavBar',
      data: function() {
         return {
            navItems: [
               {
                  id: 1,
                  path: '/works/',
                  text: 'Look at',
                  insideLink: 'my works'
               },
               {
                  id: 2,
                  path: '/about/',
                  text: 'Something',
                  insideLink: 'about Me'
               },
               {
                  id: 3,
                  path: '/skills/',
                  text: 'My',
                  insideLink: 'skills'
               }
            ],
            words: [
               'ciao',
               'a',
               'tutti'
            ]
         }
      }
   }
</script>

<style lang="scss">
   
</style>
