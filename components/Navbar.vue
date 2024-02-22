<template>
<nav class="bg-gray-200">
  <div class="container mx-auto max-w-screen-lg px-0 py-3 flex flex-row justify-between">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">Nuxt Movie App</nuxt-link>
      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end flex flex-row">
        <div class="flex flex-row">
          <nuxt-link class="navbar-item px-1" to="/register">Register</nuxt-link>
          <!-- <nuxt-link class="navbar-item px-1" to="/login">Log In</nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
</nav>



</template>
<style>
.container {
  @apply mx-auto max-w-screen-lg px-4;
}
</style>