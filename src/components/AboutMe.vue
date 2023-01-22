<template>
   <section id="about-section" class="py-5 px-5">
      <GoBack />

      <div class="row">
         <div class="col-12 mb-3">
            <div class="propic">
               <img :src="about.imgSrc" :alt="about.title">
            </div>
         </div>
         <div class="col-12">
            <h2>{{ about.title }}</h2>
            <p>{{ about.text }}</p>
         </div>
      </div>
   </section>
</template>

<script>
import GoBack from './GoBack.vue'

   export default {
      components: {
         GoBack
      },
      data() {
         return {
            about: {
               title: "About me",
               imgSrc: null,
               text: "I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations."
            }
         }
      }
   }
</script>

<style scoped lang="scss">
   #about-section {
      height: 100%;

      .propic {

         background-color: #f2f2f2;
         height: 400px
      }
   }
</style>