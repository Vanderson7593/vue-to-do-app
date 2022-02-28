import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import { ITodo } from '~/types/todo'

Vue.use(Vuex)

export default () => new Store({
  state: {
    toDos: [] as Array<ITodo>
  },
  getters: {
    getToDos: state => state.toDos
  },
  actions: {
    addToDo({ commit }, label: string) {
      commit('addMutation', label)
    },
    remToDo({ commit }, id: number) {
      commit('remMutation', id)
    }
  },
  mutations: {
    addMutation(state, payload: string) {
      state.toDos = [...state.toDos, { id: state.toDos.length + 1, label: payload }]
    },
    remMutation(state, payload: number) {
      state.toDos = state.toDos.filter(({ id }) => id !== payload)
    }
  }
})
