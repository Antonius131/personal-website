<template>
   <section id="about-section" class="py-5 px-5">
      <div class="col-12">
         <h4>
            <router-link to="/">Back</router-link>
         </h4>
      </div>
      <div class="row mb-3">
         <div class="col-12">
            <div class="image-box"></div>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <h1>About me</h1>
            <p>I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations.</p>
         </div>
      </div>
   </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
   #about-section {
      height: 100%;

      .image-box {

         background-color: #f2f2f2;
         height: 400px
      }
   }
</style>