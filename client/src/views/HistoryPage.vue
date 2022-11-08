<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import HeaderPage from '../components/HeaderPage.vue';
import SideBar from '../components/SideBar.vue';

export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions(useCounterStore, ["getHistory"])
    },
    computed: {
        ...mapState(useCounterStore, ["dataHistory"])
    },
    created() {
        this.getHistory();
    },
    components: { HeaderPage, SideBar }
}
</script>
<template>
    <HeaderPage />
    <div class="mainBody">
        <SideBar />
        <table class="table table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, i) in dataHistory">
                    <th scope="row">{{i+1}}</th>
                    <td>{{data.name}}</td>
                    <td>{{data.description}}</td>
                    <td>{{data.createdAt}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>