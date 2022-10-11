<script>
  import { RouterLink } from 'vue-router'

  export default {
    name: "register",

    components: {
      RouterLink
    }
  }
</script>

<template>
  <section id="register">
    <div class="container" style="margin-top: 2.3em">
      <div class="row">
        <div class="col-6 mx-auto">
          <div class="card shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center"><i class="bi bi-shield-fill-plus"></i>&nbsp;Register
              </h5>
              <hr>
              <form class="px-4 py-3">
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" placeholder="type username"
                    required>
                </div><br>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control"
                    placeholder="email@example.com" required>
                </div><br>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control"
                    placeholder="type password" required>
                </div><br><br>
                <div class="d-flex justify-content-center">
                  <p>
                    Have account?
                    <RouterLink to="/login">
                      <a href="" style="color:black; text-decoration: none;">Back to Login</a>
                    </RouterLink>
                  </p>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-secondary">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>