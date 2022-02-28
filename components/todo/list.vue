<template>
  <div class="wrapper">
    <TodoItem v-for="todo in getToDos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TodoList',
  computed: {
    ...mapGetters(['getToDos']),
  },
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>