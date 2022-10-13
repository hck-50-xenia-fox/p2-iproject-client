<script>
let baseUrl = ` https://youtube-alex-chandra-hanif.herokuapp.com/`
import { mapActions, mapState } from 'pinia';
import YouTube from 'vue3-youtube'
import HeaderPage from '../components/HeaderPage.vue';
import SideBar from '../components/SideBar.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: { YouTube, HeaderPage, SideBar },
    methods: {
        ...mapActions(useCounterStore, ["getDetailVideo", "getComment"]),
        onReady() {
            this.$refs.youtube.playVideo()
        },

    },
    computed: {
        ...mapState(useCounterStore, ["dataDetailVideo", "dataComment"])
    },
    created() {
        this.getDetailVideo(this.$route.params.id)
        this.getComment(this.$route.params.id)

    }
}
</script>

<template>
    <HeaderPage />
    <div class="mainBody">
        <SideBar />
        <div class="d-flex flex-row h-auto ">
            <div>
                <div>
                    <YouTube :src="'https://www.youtube.com/watch?v=' + this.$route.params.id" @ready="onReady"
                        ref="youtube" />
                </div>
                <div>
                    <h1>{{dataDetailVideo.titleVideo}}</h1>
                </div>
                <div class="d-flex flex-row ">
                    <div class="align-self-center me-2">
                        <img style="border-radius: 50% ;" :src="dataDetailVideo.avatar" alt="">
                    </div>
                    <div class="align-self-center"
                        @click.prevent="this.$router.push(`/channeldetail/${dataDetailVideo.channelId}`)">
                        <h5>
                            <h3>
                                <a href=""
                                    style="color: black; text-decoration:none">{{dataDetailVideo.titleChannel}}</a>
                            </h3>
                        </h5>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-between mt-3">
                    <div>
                        <h4>{{dataDetailVideo.totalViews}}x views</h4>
                    </div>
                    <div>
                        <h4>{{dataDetailVideo.totalLike}} Likes</h4>
                    </div>
                    <div>
                        <h4>{{dataDetailVideo.totalComment}} Commentars</h4>
                    </div>
                    <div>
                        <h4>Release : {{dataDetailVideo.release}}</h4>
                    </div>
                </div>

                <!-- contoh -->
            </div>
            <!-- kesamping -->
            <div class="w-75">
                <div>
                    <h2>Commentars</h2>
                </div>
                <div style="min-height:50px ; width:400px" class=" ms-2 container border" v-for="data in dataComment">
                    <div class="d-flex">
                        <div class="align-self-center">
                            <img style="height: 47px;" :src="data.avatarUrl" alt="">
                        </div>
                        <div class="align-self-center me-2">
                            <h5>{{data.comment}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>