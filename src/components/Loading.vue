<template>
  <div class="text-center loading-page">
    <div>
      <h1 class="loading-title">Watch aub even</h1>
      <p class="loading-subtitle my-3">
        Jouw antwoorden worden gecontroleerd...
      </p>
      <PulseLoader
        class="my-5"
        :loading="loading"
        color="#fff"
        size="30px"
      ></PulseLoader>
      <ul class="loading-list pt-3">
        <li v-for="(item, index) in list" :key="index" class="my-3">
          <img src="../assets/icons/icon-check.svg" alt="" />
          <span class="ml-3 pt-3">{{ item.message }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  components: {
    PulseLoader,
  },
  data() {
    return {
      list: [
        {
          message: 'Alle antwoorden ontvangen',
        },
        {
          message: 'Geen dubbele registraties gevonden',
        },
        {
          message: 'Gefeliciteerd, je komt in aanmerking!',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.loading-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  position: absolute;

  .loading-title {
    color: #11aef4;
    font-weight: 600;
    font-size: 37px;
  }
  .loading-subtitle {
    color: #fff;
    font-size: 26px;
  }

  .loading-list {
    color: #fff;
    font-size: 20px;

    li {
      list-style: none;
      position: relative;
      vertical-align: middle;
    }
  }

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .loader {
    color: #ffffff;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    z-index: 99999;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
}
</style>