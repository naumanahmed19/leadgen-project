<template>
  <div class="home text-light vertical-center d-flex align-items-center">
    <div class="container">
      <div class="row d-flex align-items-center ">
        <div class="col-6 text-center">
          <h1>Maak kans op een<br />€1000 Waardebon!</h1>
          <img alt="gift" class="my-5" src="../assets/gift.svg" />
        </div>
         <div class="col-6 "><Form /></div>
      </div>
     
         <Footer />
    </div>
 
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import Footer from "./Footer.vue";
import Form from "./Form.vue";
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
.home {
  background-image: url("../assets/bg.jpg"); 
  background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;

}
a {
  color: #42b983;
}
</style>