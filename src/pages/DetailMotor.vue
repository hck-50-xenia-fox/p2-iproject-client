<script>
import { mapActions, mapState } from 'pinia'
import { useSewamotorStore } from '../stores/sewamotor.js'

export default {
    computed: {
        ...mapState(useSewamotorStore, ['currentMotorcycle'])
    },
    methods: {
        ...mapActions(useSewamotorStore, ['getMotorcycleById'])
    },
    created() {
        this.getMotorcycleById(this.$route.params.id)
        // Nambah comment buat branch test-git-flow
        // Ini untuk test lagi
    }
}
</script>

<template>
    <div id="fh5co-wireframe">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>{{currentMotorcycle.brand}} {{currentMotorcycle.model}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 animate-box">
                    <div class="user-frame">
                        <h3>Price: {{currentMotorcycle.price}}</h3>
                        <p>
                            Fuel: {{currentMotorcycle.fuel}}
                            Price: {{currentMotorcycle.price}}
                        </p>
                        <button v-if="currentMotorcycle.status === `Available`"
                            class="btn-block btn-success btn-outline:hover">
                            {{currentMotorcycle.status}}
                        </button>
                        <button v-else class="btn-block btn-danger">
                            {{currentMotorcycle.status}}
                        </button>
                    </div>
                </div>
                <div class="col-md-7 animate-box">
                    <img :src="currentMotorcycle.imageUrl" style="height: 450px;" />
                </div>
            </div>
        </div>
    </div>
</template>