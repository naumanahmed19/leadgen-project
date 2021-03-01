<template>
  <router-view v-slot="{ Component }">
    <transition
      name="slide"
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeIn"
    >
      <div class="wrapper">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup>
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

#app {
  font-family: "Poppins", sans-serif;
}
.wrapper {
  min-height: 100vh;
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>