<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-x-10 gap-y-10 mb-10">
    <div v-for="movie in movies">
      <MovieCard :movie="movie"></MovieCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '~~/types/Movie';
const props = defineProps({
  movies: {
    type: Array as () => Movie[],
    required: true,
  },
});
</script>