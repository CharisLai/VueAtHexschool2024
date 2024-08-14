<script setup>
import { ref } from 'vue'

const text = ref('')

const todos = ref([
  {
    id: 1,
    text: 'This is string'
  }
])

const tempEdit = ref({
  id: '',
  text: ''
})

const addTodo = () => {
  todos.value.push({
    text: text.value,
    id: new Date().getTime()
  })

  text.value = ''
}

const deleteTodo = (todo) => {
  const index = todos.value.findIndex((item) => item.id === todo.id)

  todos.value.splice(index, 1)
}

const prepareEdit = (todo) => {
  tempEdit.value = { ...todo }
}

const confirmEdit = () => {
  const index = todos.value.findIndex((item) => item.id === tempEdit.value.id)

  todos.value[index] = tempEdit.value
  tempEdit.value = {}
}
</script>

<template>
  <header>
    <h2>Week 1: Vue TodoList-Add Edit Delete</h2>
  </header>

  <body>
    <input type="text" v-model="text" />
    <button type="button" @click="addTodo">Add</button>
    <hr />
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button type="button" @click="deleteTodo(todo)">Del</button>
      <button type="button" @click="prepareEdit(todo)">Edit</button>
      <hr />
    </div>

    <hr />
    <div v-if="tempEdit.id">
      <h3>Edit place</h3>
      Now : {{ tempEdit.text }}
      <br />
      <input type="text" v-model="tempEdit.text" />
      <button type="button" @click="confirmEdit">Confirm</button>
      <button type="button" @click="tempEdit = {}">Cancel</button>
    </div>
  </body>
</template>
