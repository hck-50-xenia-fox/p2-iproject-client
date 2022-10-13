<script>
import { mapActions, mapState } from 'pinia';
import CardComponent from '../components/CardComponent.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: { CardComponent },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState(useCounterStore, ['movies'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMovies']),
        changePage(page) {
            this.fetchMovies(page, this.search)
        },
        getMovies(page) {
            this.fetchMovies(page, this.search)
        }
    },
    created() {
        this.fetchMovies()
    }
}
</script>

<template>
    <!-- MOVIES PAGE -->
    <div class="container-fluid " style="min-height:95vh">
        <div class="">
            <div class="d-flex py-5 justify-content-between">
                <h1 class="">MOVIES</h1>
                <div class="d-flex align-items-center flex-row">
                    <div class="me-3">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a @click.prevent="changePage(1)" class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(2)" class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(3)" class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(4)" class="page-link" href="#">4</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(5)" class="page-link" href="#">5</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(6)" class="page-link" href="#">6</a>
                                </li>
                                <li class="page-item"><a @click.prevent="changePage(7)" class="page-link" href="#">7</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <form @submit.prevent="getMovies" class="d-flex flex-row ">
                        <div class="">
                            <input v-model="search" type="text" class="form-control" id="search-engine"
                                placeholder="Search">
                        </div>
                        <div class="ms-2">
                            <button type="submit" class="btn mb-3" id="button">Search</button>
                        </div>
                    </form>
                    <!-- </div> -->
                </div>
            </div>
            <div class=" d-flex justify-content-center">
                <div class="d-flex flex-wrap">
                    <CardComponent v-for="movie in movies" :key="movie.id" :movie="movie" />
                </div>
            </div>
        </div>
    </div>
    <!-- END MOVIES PAGE -->
</template>