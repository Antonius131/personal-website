<template>
   <button type="button" class="btn btn-dark" @click="$emit('click')">
      <slot />
   </button>
</template>

<script>
export default {
}
</script>

<style>

</style>