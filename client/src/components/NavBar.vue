<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Navbar",
};
</script>

<template>
  <header class="header" data-header>
    <div class="container">
      <h1>
        <a href="#" class="logo">EduCourse</a>
      </h1>

      <nav class="navbar" data-navbar>
        <div class="navbar-top">
          <a href="#" class="logo">EduCourse</a>

          <button
            class="nav-close-btn"
            aria-label="Close menu"
            data-nav-toggler
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li class="navbar-item">
            <router-link
              to="/"
              class="nav-link px-4 text-center col-4"
              data-nav-toggler
              >Home</router-link
            >
          </li>

          <li class="navbar-item">
            <router-link
              to="/about"
              class="nav-link px-4 text-center col-4"
              data-nav-toggler
              >About</router-link
            >
          </li>

          <li class="navbar-item">
            <router-link
              to="/course"
              class="nav-link px-4 text-center col-4"
              data-nav-toggler
              >Courses</router-link
            >
          </li>

          <li class="navbar-item">
            <router-link
              to="/mycourse"
              class="nav-link px-4 text-center col-4"
              data-nav-toggler
              >My Course</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <router-link to="/login" class="header-action-btn login-btn">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

          <span class="span">Login</span>
        </router-link>

        <router-link to="/" class="header-action-btn login-btn">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

          <span class="span">Logout</span>
        </router-link>

        <button
          class="header-action-btn nav-open-btn"
          aria-label="Open menu"
          data-nav-toggler
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>

      <div class="overlay" data-nav-toggler data-overlay></div>
    </div>
  </header>
</template>