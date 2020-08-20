<template>
  <div id="app">
    <h1>ToDoApp</h1>
    <form v-on:submit.prevent="onclick">
      <input type="text" id="title" v-model="title" required/>
      <input type="submit" value="ADD" />
    </form>
    <ul v-for="( task, index ) in tasks" :key="index">
      <li>
        {{ task.title }}
        <input type="button" value="DONE" v-on:click="completeTask(task.title)" />
        <input type="button" value="DELETE" v-on:click="deleteTask(task.title)" />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onclick() {
      this.$store.commit("addTask", {
        task: {
          title: this.title
        } 
      });
      this.title = '';
    },
    deleteTask(title) {
      this.$store.commit("deleteTask", title);
    },
    completeTask(title)  {
      this.$store.commit("completeTask", title);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul li {
  list-style: none;
}

div.is_done {
  background-color: #d3d3d3;
}

.taskShow {
  border-bottom: 1px solid black;
}
</style>
