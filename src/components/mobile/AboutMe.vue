<template>
   <section>
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
      <hr class="my-4">
      <div class="row">
         <div class="col-12">
            <Footer />
         </div>
      </div>
   </section>
</template>

<script>
import GoBack from './GoBack.vue'
import Footer from './Footer.vue'

   export default {
      components: {
         GoBack,
         Footer
      },
      data() {
         return {
            about: {
               title: "About me",
               imgSrc: null,
               text: "I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations.I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations.I’m an Italian based Web Developer and UX/UI Designer. Passionate about creative code, minimalism and bold color combinations."
            }
         }
      }
   }
</script>

<style scoped lang="scss">
   .propic {
      background-color: #f2f2f2;
      height: 400px
   }
</style>