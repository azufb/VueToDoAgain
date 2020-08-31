import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

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
        deleteTask(state, d) {
            // インデックス番号を取得し、spliceメソッドで1つ削除。
            // 通常はindexOfだが、連想配列の時はfindIndexでインデックス番号取得。
            let index = state.tasks.findIndex(task => task.d === d);
            state.tasks.splice(index, 1);
        },
        completeTask(state, d) {
            let index = state.tasks.findIndex(task => task.d === d);
            state.tasks[index]['title'] = 'Done!!';
        }
    },
    plugins: [createPersistedState()],
})