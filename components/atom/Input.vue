<template>
  <div>
    <input
      class="input"
      type="text"
      placeholder="To do description"
      @input="handleInput($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Input',
  props: {
    value: {
      required: true,
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(text: string) {
      this.$emit('input', text)
    },
  },
})
</script>

<style >
.input {
  padding: 10px;
  min-width: 320px;
  border: 1px solid #1e90ff;
}
</style>