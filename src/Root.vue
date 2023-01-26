<template>
   <div id="root" class="container-fluid d-none d-md-block">
     <div class="row" id="main-wrapper">
       <MainDesktop />
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
 
 <style lang="scss">
 body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
     
     #root {
       font-family: "Work Sans", sans-serif;
       color: #2c3e50;
       
       #main-wrapper {
         height: 100vh;
       }
     }
 }
 </style> 