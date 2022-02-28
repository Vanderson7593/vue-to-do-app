<template>
  <div class="container">
    <h1 class="title">Simple to do list app</h1>
    <div class="input-wrapper">
      <Input v-model="label" />
      <Button @onClick="addToDo(label)">
        <Plus />
      </Button>
    </div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      label: '',
    }
  },
  computed: {
    ...mapGetters(['getToDos']),
  },
  methods: {
    ...mapActions(['addToDo']),
  },
})
</script>

<style>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #1e90ff;
  text-align: center;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
}

body {
  box-sizing: border-box;
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