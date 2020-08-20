import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    getters: {
        tasks(state) {
            return state.tasks
        }
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.push(payload.task);
        },
        deleteTask(state, title) {
            // インデックス番号を取得し、spliceメソッドで1つ削除。
            // 通常はindexOfだが、連想配列の時はfindIndexでインデックス番号取得。
            let index = state.tasks.findIndex(task => task.title === title);
            state.tasks.splice(index, 1);
        },
        completeTask(state, title) {
            let index = state.tasks.findIndex(task => task.title === title);
            state.tasks[index]["title"] = "Done!!";
        }
    }
})