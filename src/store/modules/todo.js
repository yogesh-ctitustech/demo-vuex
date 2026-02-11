const GET_TODOS = "GET_TODOS";
const GET_TODO = "GET_TODO";
const DELETE_TODO = "DELETE_TODO";
const CANCEL_TODO = "CANCEL_TODO";
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

const data = [
  {
    id: crypto.randomUUID(),
    name: "John",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Kim",
    completed: false,
  },
];

const state = {
  todoData: [],
  selectedTodo: undefined,  
};

// getters
const getters = {
  // todoList: state => state.todos,
};
const mutations = {
  [GET_TODOS](state, todoData) {
    console.log("Call Get all Mutation", todoData);
    state.todoData = todoData;
  },
  [GET_TODO](state, todoId) {
    console.log("Call Get Mutation", todoId);
    const updateTodo = state.todoData.filter((todo) => todo.id == todoId);
    console.log("Call Get Mutation", updateTodo[0]);
    state.selectedTodo = updateTodo[0];
  },
  [DELETE_TODO](state, todoId) {
    const updateTodos = state.todoData.filter((todo) => todo.id !== todoId);
    console.log("Call Delete Mutation", updateTodos);
    state.todoData = updateTodos;
  },
  [CANCEL_TODO](state) {
    state.selectedTodo = undefined;
  },
  [CREATE_TODO](state,data){
    state.todoData.push(data);
  },
  [UPDATE_TODO](state, data) {
    console.log("Call Update Mutation", data);
    const updateTodo = state.todoData.map((todo) =>
      todo.id == data.id
        ? { ...todo, name: data.name, completed: data.completed }
        : todo,
    );
    console.log("Call Update Mutation", updateTodo[0]);
    state.selectedTodo = undefined;
  },
};

const actions = {
  async getTodosAction({ commit }) {
    const todos = data;
    console.log("Call Get All Todos Action", todos);
    commit(GET_TODOS, todos);
  },
  async getTodoAction({ commit }, todoId) {
    console.log("Call Get Todo Action", todoId);
    commit(GET_TODO, todoId);
  },
  async deleteTodoAction({ commit }, todoId) {
    console.log("Call Delete Todo Action", todoId);
    commit(DELETE_TODO, todoId);
  },
  async cancelTodoAction({ commit }) {
    console.log("Call Cancel Todo Action");
    commit(CANCEL_TODO);
  },
  async saveTodoAction({ commit }, payload) {
    console.log("Call save Todo Action", payload);
    const data= {id: crypto.randomUUID(),name:payload.name,canceled:false} 
    commit(CREATE_TODO, data);
  },
  async updateTodoAction({ commit }, payload) {
    console.log("Call Update Todo Action", payload);
    commit(UPDATE_TODO, payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
