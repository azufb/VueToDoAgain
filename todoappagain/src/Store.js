import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        tasks: [
            {
                title: 'お弁当を買う。'
            }
        ]
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.push(payload.task);
        }
    }
})