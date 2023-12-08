// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: 'Vuex',
    },
    mutations: {
        // Functions to modify the state
    },
    actions: {
        // Async operations and business logic
    },
    getters: {
        // Computed properties based on state
    },
});
