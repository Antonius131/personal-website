<template>
   <div id="root" class="container-fluid d-none d-md-block">
     <div class="row" id="main-wrapper">
         <div class="col-6">
            <MainDesktop />
         </div>
         <div id="content" class="col-6">
            <Content />
         </div>
     </div>
   </div>
</template>
 
<script>
import MainDesktop from './components/desktop/MainDesktop';
import Content from './components/desktop/Content'
 
   export default {
      name: 'App',
      components: {
         MainDesktop,
         Content
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
 </style> 