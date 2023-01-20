<template>
   <section id="content-section" class="py-5 px-5">
      <div class="row mb-2">
         <div class="col-12">
            <h4>
               <router-link to="/">Back</router-link>
            </h4>
         </div>
      </div>
      <div class="row mb-3">
         <div class="col-12">
            <div class="image-box"></div>
         </div>
      </div>
      <div class="row">
         <div class="col-6 text-start">
            <p class="fw-bold">My work</p>
         </div>
         <div class="col-6 text-end">
            <p>work info</p>
         </div>
      </div>
   </section>
</template>

<script>
   export default {
      name: 'ContentComponent',
   }
</script>

<style scoped lang="scss">
   #content-section {
      height: 100%;

      .image-box {

         background-color: #f2f2f2;
         height: 500px
      }
   }
</style>