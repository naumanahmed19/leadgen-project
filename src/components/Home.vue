<template>
  <div class="text-light vertical-center align-items-center hero">
    <div class="bg"></div>
    <div class="steps-container p-3 d-sm-block d-md-none"><Steps /></div>

    <div>
      <div class="container">
        <div
          class="row d-flex justify-content-between pt-lg-5 align-items-center justify-content-between text-lg-center d-sm-block d-md-none mt-4"
        >
          <div class="col-8 col-lg-6">
            <h1 class="fw-bold title" v-html="title" />
          </div>
          <div class="col-3">
            <img
              class="badge-03 img-fluid"
              src="../assets/images/badge-12.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="row d-flex align-items-center flex-column-reverse flex-md-row"
        >
          <div class="col-lg-6 product-section">
            <h1
              class="fw-bold title text-center d-none d-md-block"
              v-html="title"
            />

            <img
              alt="gift"
              class="my-5 img-fluid"
              src="../assets/images/gift.svg"
            />
            <img
              class="badge-12 d-none d-sm-block d-md-block"
              src="../assets/images/badge-03.svg"
              alt=""
            />
          </div>
          <div class="col-lg-5 offset-lg-1"><Form /></div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Form from './Form.vue'
import Steps from './Steps.vue'
export default {
  components: {
    Steps,
    Footer,
    Form,
  },

  data() {
    return {
      title: ' Maak kans op een<br />€1000 Waardebon!',
    }
  },
}
</script>



<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

.bg {
  background-image: url('../assets/images/bg.jpg');
  background-color: #2680eb;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  z-index: -1;
  width: 100%;
}

.product-section {
  position: relative;
  .badge-12 {
    bottom: 200px;
    right: 0;
    position: absolute;
  }
}
h1 {
  font: 42px;
}
@include media-breakpoint-up(md) {
  .hero {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@include media-breakpoint-down(sm) {
  h1 {
    font-size: 22px;
  }
  .steps-container {
    background: #eaf4fe;
  }
}
</style>