<template>
  <button class="button" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
})
</script>

<style>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1e90ff;
  cursor: pointer;
}
</style>