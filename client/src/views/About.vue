<script>
export default {

}
</script>

<template>
  <section class="section about" id="about" aria-label="about">
          <div class="container">
            <figure class="about-banner">
              <img
                src="../assets/images/about-banner.jpg"
                width="450"
                height="590"
                loading="lazy"
                alt="about banner"
                class="w-100 about-img"
              />

              <img
                src="../assets/images/about-abs-1.jpg"
                width="188"
                height="242"
                loading="lazy"
                aria-hidden="true"
                class="abs-img abs-img-1"
              />

              <img
                src="../assets/images/about-abs-2.jpg"
                width="150"
                height="200"
                loading="lazy"
                aria-hidden="true"
                class="abs-img abs-img-2"
              />
            </figure>

            <div class="about-content">
              <p class="section-subtitle">Who We Are</p>

              <h2 class="h2 section-title">We Offer The Best Carrier</h2>

              <ul class="about-list">
                <li class="about-item">
                  <div class="item-icon item-icon-1">
                    <img
                      src="../assets/images/about-icon-1.png"
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 class="h3 item-title">Industry Expert Instructor</h3>

                    <p class="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>

                <li class="about-item">
                  <div class="item-icon item-icon-2">
                    <img
                      src="../assets/images/about-icon-2.png"
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 class="h3 item-title">Up-to-Date Course Content</h3>

                    <p class="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>

                <li class="about-item">
                  <div class="item-icon item-icon-3">
                    <img
                      src="../assets/images/about-icon-3.png"
                      width="30"
                      height="30"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 class="h3 item-title">Biggest Student Community</h3>

                    <p class="item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmoded tempor incididunt dolore magna aliqua.
                    </p>
                  </div>
                </li>
              </ul>

              <a href="#" class="btn btn-primary">
                <span class="span">Know About Us</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </div>
          <section
          class="section newsletter"
          aria-label="newsletter"
          style="background-image: url('../assets/images/newsletter-bg.jpg')"
        >
          <div class="container">
            <p class="section-subtitle">Subscribe Newsletter</p>
            <form action="" class="newsletter-form">
              <div class="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Enter your mail address"
                  required
                  class="email-field"
                />

                <ion-icon
                  name="mail-open-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>

              <button type="submit" class="btn btn-primary">
                <span class="span">Subscribe</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </form>
          </div>
        </section>
        </section>
</template>
