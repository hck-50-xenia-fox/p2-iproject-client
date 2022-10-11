<script>
  import { RouterLink } from 'vue-router'

  export default {
    name: "login",

    components: {
      RouterLink
    }
  }
</script>

<template>
  <section id="login">
    <div style="width: 100%; height: 100%; background-image: url('https://wallsbazar.com/wp-content/uploads/2022/03/Black-And-White-Photos.jpg'); width: 100%; height: 100%;">

      <div class="container mb-4" style="margin-top: 4.5em;" >
        <div class="row">
          <div class="col-6 mx-auto">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center"><i class="bi bi-shield-lock-fill"></i>&nbsp;Login</h5>
                <hr>
                <form class="px-4 py-3">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="email@example.com"
                      required>
                  </div><br>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="type password"
                      required>
                  </div><br><br>
                  <div class="d-flex justify-content-center">
                    <p>
                      Don't have account?
                      <RouterLink to="/register">
                        <a href="" style="color:black; text-decoration: none;">Register</a>
                      </RouterLink>
                    </p>
                  </div>
    
                  <div class="d-flex justify-content-center">
                    <div id="buttonDiv"></div>
                  </div>
                  <br>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-secondary">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>