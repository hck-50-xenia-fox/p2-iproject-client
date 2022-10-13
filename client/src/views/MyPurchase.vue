<script>
import { mapActions, mapState } from 'pinia';
import CardComponent from '../components/CardComponent.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: { CardComponent },
    computed: {
        ...mapState(useCounterStore, ['mypurchases'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMyPurchases']),
    },
    created() {
        this.fetchMyPurchases()
    }
}
</script>

<template>
    <!-- MOVIES PAGE -->
    <div class="container-fluid " style="min-height:95vh">
        <div class="">
            <div class="d-flex py-5 justify-content-between">
                <h1 class="">MY PURCHASES</h1>
            </div>
            <div class=" d-flex justify-content-center">
                <div class="d-flex flex-wrap">
                    <CardComponent v-for="movie in mypurchases" :key="movie.id" :movie="movie" />
                </div>
            </div>
        </div>
    </div>
    <!-- END MOVIES PAGE -->
</template>