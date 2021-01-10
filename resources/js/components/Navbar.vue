<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item is-size-4 has-text-weight-bold" href="/">
                Laravel8-Vue3 SPA
            </a>
        </div>

        <div id="app-navbar" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link class="button is-primary"  to="/register" v-if="!authenticatedUser">
                            <strong>Sign up</strong>
                        </router-link>
                        <router-link class="button is-light" to="/login" v-if="!authenticatedUser"> Log in </router-link>
                        <a class="button is-light"  @click="logout" v-if="authenticatedUser">
                            <strong>Log out</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    },
    computed:{
        authenticatedUser(){
            return this.$store.getters.authenticatedUser
        }
    }
};
</script>
