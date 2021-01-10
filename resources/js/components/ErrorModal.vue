<template>
    <section class="section">
        <div class="modal" :class="{'is-active':error}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="notification is-danger">
                    <button class="delete" @click="onClose"></button>
                    {{error}}
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        onClose() {
            this.$store.dispatch('clearError')
        },
    },
    computed: {
        error() {
            return this.$store.getters.error;
        },
    },
};
</script>
