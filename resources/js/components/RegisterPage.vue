<template>
<section class="section">
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Enter your name"
                        v-model="name"
                        required
                    />
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                        class="input"
                        type="email"
                        placeholder="Enter your email"
                        v-model="email"
                        required
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input
                        type="password"
                        class="input"
                        placeholder="Enter your password"
                        v-model="password"
                        required
                    />
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</section>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods:{
        onSubmit(){
            console.log(this.$store.state.name)
            this.$store.dispatch('register',{name: this.name,email:this.email,password:this.password})
        }
    }
};
</script>
