<template>
  <div id="app">
    <h1>ToDo Manager</h1>
    <form v-on:submit.prevent="onclick">
      <div class="inputForm">
        <input type="text" id="title" v-model="title" required/>
      </div>
      <input type="submit" value="ADD" />
    </form>
    <ul v-for="( task, index ) in tasks" :key="index">
      <li>
        {{ task.title }}
      </li>
      <input class="compBtn" type="button" value="DONE" v-on:click="completeTask(task.title)" />
      <input class="delBtn" type="button" value="DELETE" v-on:click="deleteTask(task.title)" />
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
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.inputForm {
  width: 100%;
}

.inputForm input {
  width: 40%;
  margin: 0 auto;
  margin-bottom: 15px;
}

ul {
  margin-left: 350px;
  margin-right: 100px;
  display: flex;
}

ul li {
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 60px;
  width: 500px;
  list-style: none;
  background-color: #d3d3d3;
  overflow: scroll;
}

.compBtn {
  margin-top: 10px;
  margin-left: 5px;
}

.delBtn {
  margin-top: 10px;
  margin-left: 10px;
}

footer {
  margin-top: auto;
}

footer p {
  margin-bottom: 0px;
}
</style>
