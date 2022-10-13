<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            id: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['addDataPurchase']),
        procceed() {
            this.addDataPurchase(this.id)
        }

    },
    created() {
        console.log(this.$route.query, "===");
        this.id = this.$route.query.MovieId
    }
}
</script>

<template>
    <div class="container-fluid" @click="procceed">
        <span>Success purchase!</span>
        <span>Click anywhere to continue</span>

    </div>

</template>