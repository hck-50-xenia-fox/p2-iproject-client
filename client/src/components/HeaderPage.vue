<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()
export default {
    data() {
        return {
            search: "",
            runtimeTranscription_: "",
            transcription_: [],
            lang_: "id-ID"
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["searchMovie"]),
        start() {
            sr.start()
        }
    },
    mounted() {
        sr.onresult = (evt) => {
            const t = Array.from(evt.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')

            this.search = t
        }
    }
}
</script>
<template>
    <!-- Header Starts -->
    <div>
        <div class="header">
            <div class="header__left">
                <i id="menu" class="material-icons">menu</i>
                <img src="../assets/YouTube-Logo.wine.svg" alt="" @click.prevent="this.$router.push('/')" />
            </div>

            <div class="header__search d-flex flex-row">
                <form action="" @submit.prevent="this.$router.push(`/search/${search}`)">
                    <input type="text" placeholder="Search" v-model="search" />
                    <button type="submit"><i class="material-icons">search</i></button>
                </form>
                <div class="ms-3">
                    <button @click.prevent="start"><i id="menu" class="material-icons">mic</i></button>
                </div>
            </div>

            <div class="header__icons">
                <i class="material-icons display-this">search</i>
                <i class="material-icons">videocam</i>
                <i class="material-icons">apps</i>
                <i class="material-icons">notifications</i>
                <i class="material-icons display-this">account_circle</i>
            </div>
        </div>
    </div>
</template>