<template>
  <div class="bg-white text-md-center box">
    <h4 class="my-3">{{ item.title }}</h4>

    <figure>
      <img class="my-3" :src="item.image" alt="" />
    </figure>
    <a
      v-if="item.url"
      href="{{item.url}}"
      class="btn btn-outline-primary btn-rounded px-3"
    >
      Kies deze
      <img class="pl-3" src="../assets/icons/icon-arrow-left.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

.box {
  .btn-rounded {
    border-color: #b4d1f8;
    color: #2b58bf;
    border-radius: 30px;
    border-radius: 50px;
    border-width: 2px;
  }

  padding: 3rem;
  margin-bottom: 10px;
  h4 {
    font-size: 16px;
    padding: 0 45px;
  }
  img {
    max-height: 120px;
  }
}

@media (max-width: 767px) {
  figure {
    position: absolute;
    left: 20px;
    top: 20px;
    bottom: 0;
  }
  .box {
    padding: 30px 0px 30px 170px;
    h4 {
      font-size: 20px;
      padding: 0 0;
    }
    img {
      max-height: 100px;
    }
  }
}
</style>
