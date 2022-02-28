<template>
  <div class="to-do-wrapper">
    <h3>{{ todo.label }}</h3>
    <Button :is-plus="false" @onClick="remToDo(todo.id)">
      <Minus />
    </Button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapActions } from 'vuex'
import { ITodo } from '../../types/todo'

export default Vue.extend({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<ITodo>,
      required: true,
      default: () => [] as ITodo[],
    },
  },
  methods: {
    ...mapActions(['remToDo']),
  },
})
</script>

<style scoped>
.to-do-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

h3 {
  color: #1e90ff;
}
</style>