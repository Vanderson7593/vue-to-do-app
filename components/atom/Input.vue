<template>
  <div>
    <input class="input" type="text" placeholder="To do description" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Input',
})
</script>

<style >
.input {
  padding: 10px;
  min-width: 320px;
  border: 1px solid #1e90ff;
}
</style>