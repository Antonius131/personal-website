<template>
  <button type="button" class="btn btn-dark" @click="$emit('click', method)">
   <slot />
  </button>
</template>

<script>
export default {
   props: {
      method: Function
   }
}
</script>

<style>

</style>