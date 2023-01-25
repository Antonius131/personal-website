<template>
   <li>
      {{ item.text }}
      <router-link :to="item.path">
         {{ item.insideLink }}
      </router-link>
   </li>
</template>

<script>
export default {
   props: {
      item: Object
   }
}
</script>

<style>

</style>