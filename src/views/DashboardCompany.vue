<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";
import ManagerCard from "../components/ManagerCard.vue";
import { useManagerStore } from "../stores/manager";
export default {
  name: "DashboardCompany",
  components: { NavBar, Footer, RouterLink, ManagerCard },
  methods: {
    ...mapActions(useManagerStore, ["getManager"]),
    changeLoginType(page) {
      this.loginType = page;
    },
  },
  computed: {
    ...mapWritableState(useIndexStore, ["loginType"]),
    ...mapState(useManagerStore, ["managers"]),
  },
  created() {
    this.getManager();
  },
};
</script>

<template>
  <NavBar />
  <section>
    <div class="row gap-5 justify-content-center" style="width: 100%">
      <h2 class="d-flex justify-content-center m-4 text-black">Managers</h2>
      <div class="d-flex justify-content-center gap-4">
        <RouterLink @click="changeLoginType('companyManager')" to="/register"
          ><button class="btn btn-secondary">Add Managers</button></RouterLink
        >
      </div>
      <ManagerCard
        v-for="manager in managers"
        :key="manager.id"
        :manager="manager"
      />
    </div>
  </section>
</template>
<style>
.icon:hover {
  color: darkred;
}
.card-manager:hover {
  background-color: rgb(202, 202, 202);
}
</style>
