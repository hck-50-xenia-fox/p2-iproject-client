<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useCounterStore, ["logout"]),
        pindahKeHome() {
            this.$router.push("/")
        },
        handleLogout() {
            this.logout()
            this.$router.push("/login")
        }
    }
}
</script>
<template>
    <div class="sidebar">
        <div class="sidebar__categories">
            <div class="sidebar__category">
                <i class="material-icons">home</i>
                <span @click.prevent="pindahKeHome">Home</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">local_fire_department</i>
                <span>Trending</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">subscriptions</i>
                <span>Subcriptions</span>
            </div>
        </div>
        <hr />
        <div class="sidebar__categories">
            <div class="sidebar__category">
                <i class="material-icons">library_add_check</i>
                <span>Library</span>
            </div>
            <div class="sidebar__category" @click.prevent="this.$router.push('/history')">
                <i class="material-icons">history</i>
                <span>History</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">play_arrow</i>
                <span>Your Videos</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">watch_later</i>
                <span>Watch Later</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">thumb_up</i>
                <span>Liked Videos</span>
            </div>
        </div>
        <hr />
        <div class="sidebar__categories">
            <div class="sidebar__category">
                <i class="material-icons">settings</i>
                <span>Setting</span>
            </div>
            <div class="sidebar__category">
                <i class="material-icons">help</i>
                <span>Help</span>
            </div>
            <div class="sidebar__category" @click.prevent="handleLogout">
                <i class="material-icons">logout</i>
                <span>Logout</span>
            </div>
        </div>
    </div>
</template>