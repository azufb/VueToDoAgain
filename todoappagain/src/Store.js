import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                title: 'お弁当を買う。'
            }
        ]
    },
    getters: {
        tasks(state) {
            return state.tasks
        }
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.push(payload.task);
        }
    }
})