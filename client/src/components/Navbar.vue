<script>
export default {
    name: 'Navbar'
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Introduction
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Story</a></li>
            <li><a class="dropdown-item" href="#">Characters</a></li>
            <li><a class="dropdown-item" href="#">Summons</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/chatroom" class="nav-link" >Chat Room</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hall of Fame</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Media</a>
        </li>
      </ul>
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav" >
          <li class="nav-item" >
            <a class="nav-link" href="" >
                Logout
            </a>
          </li>
          <li class="nav-link" >
            <router-link to="/login">
                Have an account? Login now
            </router-link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</nav>

</template>