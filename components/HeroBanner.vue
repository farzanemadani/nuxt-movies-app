<template>
    <div class="bg-app">
      <h2 class="absolute left-0 right-0 top-25 text-2xl font-bold text-center text-white z--10 ">Unlimited movies, TV shows, and more</h2>
    </div>
</template>
<script setup>
</script>
<style scoped>
.bg-app{
  height: 300px;
  background-image: url(../assets/logo.jpeg);
  background-position: center;
  position: relative;
  &::after{
    width: 100%;
    height: 100%;
    content: '';
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
}
</style>