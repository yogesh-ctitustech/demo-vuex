import { createStore } from "vuex";
import todo from "./modules/todo";

const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";
const DELETE_USER = "DELETE_USER";
const CANCEL_USER = "CANCEL_USER";
const UPDATE_USER = "UPDATE_USER";

const userData = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@gmail.com",
    password: "john@123",
  },
  {
    id: 2,
    first_name: "Kim",
    last_name: "Doe",
    email: "kim.doe@gmail.com",
    password: "kim@123",
  },
];

const state = {
  users: [],
  user: undefined,
};

const getters = {};

const mutations = {
  [GET_USERS](state, users) {
    state.users = users;
  },
  [GET_USER](state, userId) {
    console.log("Call Get Mutation", userId);
    const updateUser = state.users.filter((user) => user.id == userId);
    console.log("Call Get Mutation", updateUser[0]);
    this.state.user = updateUser[0];
  },
  [DELETE_USER](state, userId) {
    console.log("Call Delete Mutation", userId);
    const updateUsers = state.users.filter((user) => user.id !== userId);
    this.state.users = updateUsers;
  },
  [CANCEL_USER](state) {
    state.user = undefined;
  },
  [UPDATE_USER](state, data) {
    console.log("Call Update Mutation", data);
    const updateUser = state.users.map((user) =>
      user.id == data.id
        ? { ...user, first_name: data.first_name, last_name: data.last_name }
        : user,
    );
    console.log("Call Update Mutation", updateUser[0]);
    // this.state.users = "";
    this.state.user = undefined;
  },
};

const actions = {
  async getUsersAction({ commit }) {
    const users = userData;
    commit(GET_USERS, users);
  },
  async getUserAction({ commit }, userId) {
    commit(GET_USER, userId);
  },
  async deleteUserAction({ commit }, userId) {
    console.log("Call Delete User Action", userId);
    commit(DELETE_USER, userId);
  },
  async cancelUserAction({ commit }) {
    console.log("Call Cancel User Action");
    commit(CANCEL_USER);
  },
  async updateUserAction({ commit }, payload) {
    console.log("Call Update User Action", payload);
    commit(UPDATE_USER, payload);
  },
};

const modules = { todo };

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
