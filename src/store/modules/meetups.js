import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' :
    'http://10.0.2.2:3001/api/v1'

export default {
    namespaced: true,

    state: {
        items: []
    },
    getters: {

    },
    actions: {
        fetchMeetups({ commit, state }) {
            return axios.get(`${BASE_URL}/meetups`)
                .then(res => {
                    const meetups = res.data
                    commit('setMeetups', meetups)
                    return state.items
                })
        }
    },
    mutations: {
        setMeetups(state, meetups) {
            Vue.set(state, 'items', meetups)
        }
    }
}