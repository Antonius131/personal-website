<template>
   <div class="row" id="works-wrapper">
      <div class="col-12 mb-2">
         <div class="image-box">
            <img :src="imgSrc" :alt="title">
         </div>
      </div>
      <div class="col-6 text-start">
         <p class="fw-bold">
            {{ title }}
         </p>
      </div>
      <div class="col-6 text-end">
         <p class="">
            {{ info }}
         </p>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      index: Number,
      title: String,
      imgSrc: String,
      info: String
   }
}
</script>

<style scoped lang="scss">

#content-wrapper {
   height: 100%;

   .image-box {

      background-color: #f2f2f2;
      height: 500px
   }
}
</style>