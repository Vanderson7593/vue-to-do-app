<template>
  <div class="container">
    <h1 class="title">Simple to do list app</h1>
    <div class="input-wrapper">
      <Input />
      <Button @onClick="addToDo">
        <Plus />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    addToDo() {
      console.log('TO DO ADDED')
    },
  },
})
</script>

<style>
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  color: #1e90ff;
}

.input-wrapper {
  display: flex;
  gap: 10px;
}

body,
select,
button,
input,
textarea {
  font-family: 'Poppins', 'Open Sans', sans-serif;
}

input:focus,
textarea:focus,
button:focus,
select:focus {
  outline: none;
}
</style>