<template>
  <div class="todolist">
    <h1>Todo List</h1>
    <div class="todo-form" v-if="!selectedTodo">
      <p>Name :<input type="text" v-model="newTodo.name" /></p>
      <button @click="createTodo()">Submit</button
      ><button @click="cancel">Cancel</button>
    </div>
    <div class="todo-form" v-if="selectedTodo">
      <input type="hidden" v-model="selectedTodo.id" />
      <p>Name :<input type="text" v-model="selectedTodo.name" /></p>
      <button @click="updateTodo(selectedTodo)">Update</button
      ><button @click="cancel">Cancel</button>
    </div>
    <div class="todo-table">
      <center>
        <table border="1">
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          <tr v-for="(tod, index) in todoData" :key="tod.id">
            <td>{{ index + 1 }}</td>
            <td>{{ tod.name }}</td>
            <td>{{ tod.completed ? "Completed" : "Canceld" }}</td>

            <td>
              <button @click="deleteTodo(tod.id)">Delete</button>
              <button @click="getTodo(tod.id)">Edit</button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TodoListView",
  data() {
    return { newTodo: {} };
  },
  computed: {
    ...mapState({
      todoData: (state) => state.todo.todoData,
      selectedTodo: (state) => state.todo.selectedTodo,
    }),
  },
  created() {
    this.loadTodos();
  },

  methods: {
    async loadTodos() {
      // const {   todoData,todo } =this.$store.state.todo;
      // console.log("todo",todoData,todo,this.$store.state.todo);
      // this.todoData = this.$store.state.todo.todoData;
      console.log("todo", this.$store.state.todo);
      this.$store.dispatch("getTodosAction");
    },
    async deleteTodo(todoId) {
      this.$store.dispatch("deleteTodoAction", todoId);
    },
    async getTodo(todoId) {
      this.$store.dispatch("getTodoAction", todoId);
      //console.log("todo",this.$store.state.todo);
    },
    async createTodo() {
      this.$store.dispatch("saveTodoAction", this.newTodo);
      //console.log("todo",this.$store.state.todo);
    },
    async cancel() {
      this.$store.dispatch("cancelTodoAction");
      this.newTodo = {};
    },
    async updateTodo(todo) {
      this.$store.dispatch("updateTodoAction", todo);
    },
  },
};
</script>

<style></style>
