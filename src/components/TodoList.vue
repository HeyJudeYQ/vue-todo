<template>
  <div>
    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo" />
    <ul v-if="todos.length" class="list">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem
  },
  data() {
    return {
      newTodoText: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      localStorage.removeItem("id");
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
  text-align: left;
  padding-left: 20px;
}
</style>