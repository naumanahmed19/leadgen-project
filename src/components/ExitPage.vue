<template>
  <div class="exit pb-5 animate__animated animate__fadeIn">
    <div class="header-bg">
      <div class="container py-4 text-center ">
        <div>
          <span class="text-light h1 animate__animated animate__backInDown">Bedankt voor je deelname</span>
          <img class="img-fluid ml-3 g2 animate__animated animate__tada" src="../assets/images/g2.svg" alt="" />
        </div>
      </div>
    </div>

    <main>
      <div class="container pt-3">
        <div class="heading text-center my-5">
          <h3 class="py-4">Dankjewel. Selecteer hier je prijs!</h3>
          <span class="timer"
            ><img
              class="imr-2 rotate"
              src="../assets/icons/icon-progress.svg"
              alt=""
            />TJID OVER: 06:25:38</span
          >
        </div>

        <div class="row row-eq-height">
          <div
            class="col-lg-4"
            v-for="(item, index) in itemsList1"
            :key="index"
          >
            <Product :item="item" />
          </div>
        </div>

        <div class="title-bar text-center py-3 my-5">
          Recentelijk verlopen aanbiedingen
        </div>

        <div class="row row-eq-height">
          <div
            class="col-lg-3"
            v-for="(item, index) in itemsList2"
            :key="index"
          >
            <ProductSmall :item="item" />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Form from './Form.vue'
import Steps from './Steps.vue'
import Product from './Product.vue'
import ProductSmall from './ProductSmall.vue'
export default {
  components: {
    Steps,
    Footer,
    Form,
    Product,
    ProductSmall,
  },

  data() {
    return {
      title: ' Maak kans op een<br />€1000 Waardebon!',
      itemsList1: [
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p1.svg',
          url: '#',
        },
        {
          title: 'Win een iPhone 12 Pro',
          image: '../src/assets/images/p2.svg',
          url: '#',
        },
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p3.svg',
          url: '#',
        },
      ],
      itemsList2: [
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p4.svg',
          time: 'Verlopen op 28-12-2020',
        },
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p5.svg',
          time: 'Verlopen op 28-12-2020',
        },
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p4.svg',
          time: 'Verlopen op 28-12-2020',
        },
        {
          title: 'Maak kans op een €1000 Waardebon!',
          image: '../src/assets/images/p5.svg',
          time: 'Verlopen op 28-12-2020',
        },
      ],
    }
  },
}
</script>

<style lang="scss">

.exit {
  background: #fefaf6;
  min-height: 100vh;
  footer {
    .links {
      .nav-link {
        color: #000 !important;
      }
    }
  }
}

main {
  background: #fefaf6;
  .title-bar {
    background: #f44336;
    color: #fff;
    position: relative;
    &::before {
      background-image: url('../assets/icons/double-arrow.svg');
      background-repeat: no-repeat;
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 20px;
      top: 25px;
      content: '';
    }
    &::after {
      background-image: url('../assets/icons/double-arrow.svg');
      background-repeat: no-repeat;
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 25px;
      right: 25px;
      content: '';
    }
  }
}
.header-bg {
  background-image: url('../assets/images/exit-bg.jpg');
    background-size: cover;

}

@media (min-width: 767px) {

  .heading {
    position: relative;
    .timer {
      position: absolute;
      right: 0;
      top: 30px;
      bottom: 0;
    }
  }
}
@media (max-width: 768px) {
  .g2{
    max-height: 50px;
  }
  .h1 {
    font-size: 18px;
  }
}

.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
