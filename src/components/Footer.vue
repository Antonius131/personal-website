<template>
   <footer>
      <ul class="list-unstyled d-flex">
         <li v-for="(item, index) in items" :key="index">
            <p class="mb-0" :class="item.style">
               {{ item.name }}
            </p>
         </li>
      </ul>
   </footer>
</template>

<script>
export default {
   data() {
      return {
         items: [
            {
               name: 'Contact',
               style: 'text-start'
            },
            {
               name: 'LinkedIn',
               style: 'text-center'
            },
            {
               name: 'GitHub',
               style: 'text-end'
            }
         ]
      }
   }
}
</script>

<style scoped lang="scss">
   ul {
      text-align: justify;

      li {
         width: calc(100% / 3);
      }
   }
</style>