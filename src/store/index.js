import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)


import state from "./state";
import mutations from "./mutations";


const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state,
    mutations
})


export default store