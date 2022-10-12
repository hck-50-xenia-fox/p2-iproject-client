<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'Navbar',
    computed: {
      ...mapState(useUserStore,['isLogin']),
      infoUser() {
      return {
        username: localStorage.getItem('username')
      }
    }
    },
    methods: {
      ...mapActions(useUserStore, ['logout'])
      
    }

}
</script>

<template>
<section class="navbar-section p-0" id="navbar-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar-menu">
      <div class="container-fluid" style="height: 45px">
        <div
          style="display: flex; justify-content: flex-start; align-items: center;"
        >
          <!-- COMPANY LOGO -->
          <img
            src="../assets/image/pokemon-logo-png-1446.png"
            alt="logo"
            height="35"
            width="35"
            
            class="m-auto me-2"
          />
          <!-- COMPANY NAME -->
          <p class="navbar-brand" style="margin: auto;" href="#">
            Pokemon
          </p>
        </div>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- BUTTON LOGOUT -->
        <div v-if="isLogin === true">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a @click.prevent="$router.push('/')" class="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark">
                <span class="icon material-symbols-outlined me-2"></span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
                Hai, {{ infoUser.username }}<span id="nav-username"></span
              ></a>
            </li>
            <li class="nav-item active">
              <a @click.prevent="logout" class="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-door-closed"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"
                  />
                  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" /></svg
                >Logout
              </a>
            </li>
          </ul>
        </div>

        <!-- <div v-if="isLogin === false">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a @click.prevent="$router.push('/home')" class="nav-link" href="#">Home </a>
            </li>
            <li class="nav-item active">
              <a @click.prevent="$router.push('/login')" class="nav-link" href="#">Login </a>
            </li>
            <li class="nav-item active">
              <a @click.prevent="$router.push('/register')" class="nav-link" href="#">Register </a>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </section>
</template>