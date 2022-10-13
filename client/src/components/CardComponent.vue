<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    props: ['movie'],
    data() {
        return {
            price: 0
        }
    },
    computed: {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useCounterStore, ['addPurchase']),
        purchase() {
            this.addPurchase(this.movie.id, this.price)
        }
    }
}
</script>

<template>
    <div class="row mx-1">
        <div class="col my-3 mx-4">
            <div class="card" style="width: 24rem; height: 62rem">
                <img :src="movie.image" class="card-img-top" style="height: 500px" alt="..." />
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">{{movie.title}}</h5>
                    <div>
                        <p class="card-text">
                            Description: {{movie.description}}
                        </p>
                    </div>
                    <div col="">
                        <p class="card-text">
                            Rating: {{movie.vote}} || {{movie.totalVote}} votes
                        </p>
                        <label v-if="isLogin" for="price">Rental Time:</label>
                        <select v-if="isLogin" v-model="price" class="form-select mb-3" aria-label="Time Rental">
                            <option selected disabled>--Select Time Rental--</option>
                            <option value="20000">3 Days</option>
                            <option value="40000">7 Days</option>
                            <option value="60000">10 Days</option>
                            <option value="80000">14 Days</option>
                        </select>
                        <a @click.prevent="purchase" href="#" class="btn col-12" id="button">Rent</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>