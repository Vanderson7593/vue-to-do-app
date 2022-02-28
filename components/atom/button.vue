<template>
  <button
    class="button"
    :style="isPlus ? { borderColor: '#1e90ff' } : { borderColor: '#FF0000' }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    isPlus: {
      type: Boolean,
      required: false,
      default: () => true,
    },
  },
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
  border: 1px solid;
  cursor: pointer;
  max-height: 40px;
}
</style>