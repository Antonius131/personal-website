<template>
   <section id="content-wrapper" class="py-5 px-5">
      <GoBack />
      <Slide
         :index="index"
         :title="works[index].title"
         :imgSrc="works[index].imgSrc"
         :info="works[index].info"
      />
      <div class="row">
         <div class="col-6">
            <Button @click="prevWork()">Prev</Button>
         </div>
         <div class="col-6 text-end">
            <Button @click="nextWork()">Next</Button>
         </div>
      </div>
   </section>
</template>

<script>
import GoBack from './GoBack.vue'
import Slide from './Slide.vue'
import Button from './Button.vue'

   export default {
      name: 'PortfolioPreview',
      components: {
         GoBack,
         Slide,
         Button
      },
      data() {
         return {
            index: 0,
            works: [
               {
                  title: 'Work title',
                  imageSrc: null,
                  info: 'Work info'
               },
               {
                  title: 'Work title 2',
                  imageSrc: null,
                  info: 'Work info 2'
               },
               {
                  title: 'Work title 3',
                  imageSrc: null,
                  info: 'Work info 3'
               }
            ]
         }
      },
      methods: {
         nextWork() {
            this.index++;
                        
            if (this.index > this.works.length - 1) {
               this.index = 0;
            }
         },
         prevWork() {
            this.index--;

            if (this.index === -1) {
               this.index = this.works.length - 1;
            }
         }
      }
   }
</script>

<style scoped lang="scss">
</style>