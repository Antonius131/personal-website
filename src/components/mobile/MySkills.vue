<template>
   <section>
      <GoBack />

      <div class="row">
         <div class="col-12">
            <ul class="mt-5 list-unstyled">
               <li v-for="(skill, index) in skills" :key="index">
                  <p :class="skill.style" class="mb-0">{{ skill.text }}</p>
               </li>
            </ul>
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
import GoBack from './GoBack.vue';
import Footer from './Footer.vue';

   export default {
      components: {
         GoBack,
         Footer
      },
      data() {
         return {
            skills: [
               {
                  text: 'HTML5',
                  style: 'fw-lighter fst-italic'
               },
               {
                  text: 'CSS3',
                  style: 'fw-bold '
               },
               {
                  text: 'Bootstrap',
                  style: 'fw-lighter'
               },
               {
                  text: 'JavaScript',
                  style: 'fw-lighter'
               },
               {
                  text: 'SASS',
                  style: 'fw-lighter'
               },
               {
                  text: 'Vue.js',
                  style: 'fw-lighter'
               },
               {
                  text: 'PHP',
                  style: 'fw-lighter'
               },
               {
                  text: 'Laravel',
                  style: 'fw-lighter'
               },
               {
                  text: 'JAVA',
                  style: 'fw-lighter'
               },
               {
                  text: 'Spring',
                  style: 'fw-lighter'
               },
               {
                  text: 'SQL',
                  style: 'fw-lighter'
               },
               {
                  text: 'MySQL',
                  style: 'fw-lighter'
               },
               {
                  text: 'Wordpress',
                  style: 'fw-lighter'
               }
            ]
         }
      }
   }
</script>

<style scoped lang="scss">
   li {
      font-size: 3rem;
   }
</style>