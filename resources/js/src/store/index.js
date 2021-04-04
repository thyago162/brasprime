import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },

    getters: {
        getToken: state => {
            return state.token;
        }
    },

    actions: {
        token({commit}, payload) {
            commit('setToken', payload)
        }
    },

    mutations: {
        setToken(state, payload) {
            state.token = payload
        }
    }
})