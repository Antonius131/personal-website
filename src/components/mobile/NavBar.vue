<template>
   <nav class="navbar">
      <ul class="navbar-nav">
         <li v-for="item in navItems" :key="item">
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
