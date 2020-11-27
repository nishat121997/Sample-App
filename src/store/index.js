import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'
//import { Platform } from 'react-native'

import meetups from './modules/meetups'
//Vue.use(Vuex)
//let BASE_URL = ''

//if (Platform.OS === 'ios') {
//BASE_URL = 'http://localhost:3001/api/v1'

//} else {
// BASE_URL = 'http://10.0.2.2:3001/api/v1'
//}


//const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' :
//'http://10.0.2.2:3001/api/v1'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        meetups
    },
    // Like data in component. We are keeping our data in the state
    state: {
        todos: []
    },
    // Like computed properties in componen.
    // You can use getters to access state in the store
    getters: {},
    // Like methods in component.
    // To perform actions that usualy results in data
    actions: {

        // 2. We are getting here from dispatch of action in homeScreen
        fetchTodos({ commit, state }) {
            return axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => {
                    const todos = res.data
                        // 3. Commiting setTodos mutation
                    commit('setTodos', todos)
                    return state.todos
                })
        },
    },
    // Like methods in component. To save data to the state.
    mutations: {

        setTodos(state, todos) {
            // 4. We are seeting data to our state in reactive way
            Vue.set(state, 'todos', todos)
        },

    }
})