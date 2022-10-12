<script>
import { mapActions, mapState } from 'pinia';
import HeaderPage from '../components/HeaderPage.vue';
import SideBar from '../components/SideBar.vue';
import { useCounterStore } from '../stores/counter';
import DetailPageVue from './DetailPage.vue';
export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions(useCounterStore, ["getTrailer"]),

    },
    computed: {
        ...mapState(useCounterStore, ["dataTrailerMovie"])
    },
    created() {
        this.getTrailer()
    },
    components: { HeaderPage, SideBar }
}
</script>

<template>
    <!-- Main Body Starts -->
    <HeaderPage />
    <div class="mainBody">
        <SideBar />
        <div class="videos">
            <div class="videos__container">
                <!-- Single Video starts -->
                <div class="video" v-for="data in dataTrailerMovie" key="data.id">
                    <div class="video__thumbnail">
                        <img :src="data.thumbnailUrl" alt=""
                            @click.prevent="this.$router.push(`/detail/${data.videoId}`)" />
                    </div>
                    <div class="video__details">
                        <div class="author">
                            <img :src="data.avatarUrl" alt="" />
                        </div>
                        <div class="title" @click.prevent="this.$router.push(`/channeldetail/${data.channelId}`)">
                            <h3>
                                {{data.titleVideo}}
                            </h3>
                            <a href="">{{data.titleChannel}}</a>
                            <span>{{data.views}} Views</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>