<template>
    <footer class="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <!-- Loop over the footer items array -->
      <div v-for="item in footerItems" :key="item.id" class="flex items-center">
        <!-- Bind the item attributes and values to the HTML elements -->
        <a :href="item.url" class="mr-2">
          {{ item.name }}
        </a>
      </div>
      <!-- Render the slot content -->
      <slot></slot>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Define the footer items array
        footerItems: [
          {
            id: 1,
            name: "Movie App",
            url: "#",
            //icon: "movie-app-logo.png",
            icon: "",

          },
          {
            id: 2,
            name: "Facebook",
            url: "https://www.facebook.com",
            //icon: "facebook-icon.png",
            icon: "",

          },
          {
            id: 3,
            name: "Twitter",
            url: "https://www.twitter.com",
            //icon: "twitter-icon.png",
            icon: "",
          },
          {
            id: 4,
            name: "Terms and Conditions",
            url: "#",
            icon: "",
          },
        ],
      };
    },
  };
  </script>
  