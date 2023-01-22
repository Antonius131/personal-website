<template>
   <section class="py-5 px-5">
      <GoBack />

      <ul class="mt-5 list-unstyled">
         <li v-for="(skill, index) in skills" :key="index">
            <p :class="skill.style" class="mb-0">{{ skill.text }}</p>
         </li>
      </ul>
   </section>
</template>

<script>
import GoBack from './GoBack.vue';
   export default {
      components: {
         GoBack
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