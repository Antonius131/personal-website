<template>
   <div id="root" class="container-fluid d-none d-md-block">
     <div class="row" id="main-wrapper">
         <div class="col-6">
            <MainDesktop />
         </div>
         <div id="content" class="col-6">
            <transition name="fade" mode="out-in">
               <router-view />
            </transition>
         </div>
     </div>
   </div>
 </template>
 
 <script>
 import MainDesktop from './components/desktop/MainDesktop';
 
   export default {
      name: 'App',
      components: {
      MainDesktop
      }
   }
 </script>
 
<style scoper lang="scss">
   body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
      
      #root {
         font-family: "Work Sans", sans-serif;
         color: #2c3e50;
         
         #main-wrapper {
         height: 100vh;
         overflow: auto;
         }

         #content {
         padding: 7rem 12rem;
         height: 100vh;
         overflow: auto;
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