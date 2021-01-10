import axios from 'axios'
import {
    createStore
} from 'vuex'

import router from './router'


const store = createStore({
    state: {
        loading: false,
        authenticatedUser: null,
        events: [],
        error: null
    },
    getters: {
        loading: state => state.loading,
        events: state => state.events,
        authenticatedUser: state => state.authenticatedUser,
        error: state => state.error,
        bearerHeader: state=>`Bearer ${state.authenticatedUser.token}`
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setEvents(state, events) {
            state.events = events
        },
        setAuthenticatedUser(state, authenticatedUser) {
            state.authenticatedUser = authenticatedUser
        },
        setError(state, errorMessage) {
            state.error = errorMessage
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        register(context, registrationData) {
            context.commit('setLoading', true)
            axios.post('/api/register', registrationData).then(data => {
                context.commit('setLoading', false)
                router.replace({
                    name: 'login'
                })
            }).catch(error => {
                context.commit('setLoading', false)
                context.commit('setError', error.response.data.message)
            });
        },
        login(context, loginData) {
            context.commit('setLoading', true)
            axios.post('/api/login', loginData).then(data => {
                context.commit('setLoading', false)
                const authenticatedUser = {
                    email: loginData.email,
                    token: data.data.token
                }
                localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser))
                context.commit('setAuthenticatedUser', authenticatedUser)
                router.replace({
                    name: 'home'
                })

            }).catch(error => {
                context.commit('setLoading', false)
                context.commit('setError', error.response.data.message)
            });
        },
        logout(context) {
            context.commit('setLoading', true)
            axios.post('/api/logout', null, {
                headers: {
                    'Authorization': context.getters.bearerHeader
                }
            }).then(data => {
                context.commit('setLoading', false)
                localStorage.removeItem('authenticatedUser')
                context.commit('setAuthenticatedUser', null)
                router.replace({
                    name: 'login'
                })

            }).catch(error => {
                context.commit('setLoading', false)
                context.commit('setError', error.response.data.message)
            });

        },
        fetchEvents(context) {
            context.commit('setLoading', true)
            axios.get('/api/events', {
                headers: {
                    'Authorization': context.getters.bearerHeader
                }
            }).then(data => {
                context.commit('setLoading', false)
                context.commit('setEvents', data.data)
            }).catch(error => {
                context.commit('setLoading', false)
            });

        },
        clearError(context) {
            context.commit('clearError')
        }
    }
})


export default store
