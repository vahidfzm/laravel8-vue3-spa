<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="table-container">
                    <table class="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Event Name</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="event in events" :key="event.id">
                                <th>{{event.id}}</th>
                                <td>{{event.name}}</td>
                                <td>{{event.start_date}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    computed:{
        events(){
            return this.$store.getters.events
        }
    },
    created(){
        this.$store.dispatch('fetchEvents')
    }
};
</script>
