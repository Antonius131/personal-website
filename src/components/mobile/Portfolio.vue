<template>
   <section id="content-wrapper">
      <GoBack />
      <Slide
         :index="index"
         :title="works[index].title"
         :imgSrc="works[index].imgSrc"
         :info="works[index].info"
         :description="works[index].description"
      />
      <div id="navigation-btn" class="text-end">
         <Button @click="prevWork()" class="me-2">Prev</Button>
         <Button @click="nextWork()">Next</Button>
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
import GoBack from './GoBack'
import Slide from './Slide'
import Button from './Button'
import Footer from './Footer'

   export default {
      name: 'PortfolioPreview',
      components: {
         GoBack,
         Slide,
         Button,
         Footer
      },
      data() {
         return {
            index: 0,
            works: [
               {
                  title: 'Work title',
                  imageSrc: null,
                  info: 'Work info',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
               },
               {
                  title: 'Work title 2',
                  imageSrc: null,
                  info: 'Work info 2',
                  description: 'Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Nunc mattis enim ut tellus elementum. Habitant morbi tristique senectus et.'
               },
               {
                  title: 'Work title 3',
                  imageSrc: null,
                  info: 'Work info 3',
                  description: 'Tristique senectus et netus et. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Morbi tristique senectus et netus et malesuada.'
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
#content-wrapper {
   position: relative;

   #navigation-btn {
      position: fixed;
      bottom: 2rem;
      right: 3rem;
   }
}
</style>