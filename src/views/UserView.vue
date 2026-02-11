<template>
  <div class="users">
    <h1>Users List</h1>
    <div class="user-form" v-if="user">
        <input type="hidden" v-model="user.id">
        <p>First Name :<input type="text" v-model="user.first_name"></p>
        <p>Last Name :<input type="text" v-model="user.last_name"></p>
        <p>Email :<input type="text" v-model="user.email"></p>
        <button @click="updateUser(user)">Submit</button><button @click="cancel">Cancel</button>
    </div>
     
    <div class="users-table">
      <center>
        <table border="1">
          <tr>
            <th>Sr.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr> 
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="deleteUser(user.id)">Delete</button>
              <button @click="getUser(user.id)">Edit</button>
               
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
  name: "UserView",
  data() {
    return {
      //   users: [
      //     {
      //       id: 1,
      //       first_name: "John",
      //       last_name: "Doe",
      //       email: "john.doe@gmail.com",
      //       password: "john@123",
      //     },
      //     {
      //       id: 2,
      //       first_name: "Kim",
      //       last_name: "Doe",
      //       email: "kim.doe@gmail.com",
      //       password: "kim@123",
      //     },
      //   ],
    };
  },
  created() {
    this.loadUsers();
    
  },
  methods: {
    async loadUsers() {
      //   this.users = this.$store.state.users;
      this.$store.dispatch('getUsersAction');
    },

    async deleteUser(userId) {   
      this.$store.dispatch('deleteUserAction',userId);
    },
    async getUser(userId) {      
      this.$store.dispatch('getUserAction',userId);
    },
    async cancel() {
      this.$store.dispatch('cancelUserAction');
    },
    async updateUser(user) {
      this.$store.dispatch('updateUserAction',user);
    },
  },
  computed: {
    ...mapState({ users: (state) => state.users ,user:(state)=>state.user}),
  },
};
</script>

<style></style>

0
