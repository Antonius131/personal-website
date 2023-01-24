<template>
</template>

<script>
export default {
   name: 'Init',
   methods: {
      isMobile() {
         if (screen.width <= 768) {
            this.$router.push({ path:'/mobile/' });
         } else{
            this.$router.push({ path: '/desktop/' });
         }
      }
   },
   created() {
      this.isMobile()
   }
}
</script>

<style>
</style>