<template>
   <section id="content-section">
      <div class="row mb-2">
         <div class="col-12">
            <h4> - Back</h4>
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

<style lang="scss">
   #content-section {
      height: 100%;

      .image-box {

         background-color: #fff;
         height: 550px
      }
   }
</style>