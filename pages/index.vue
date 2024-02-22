<template>
  <div class="flex flex-col">
    <HeroBanner/>
    <div class="d-flex mx-auto">
      <SearchBox v-model="searchTerm"></SearchBox>
      <div v-if="isFetching" class="loader"></div>
    </div>
    <MovieList class="mt-10" :movies="data?.results"></MovieList>
    <Pagination
      class="mb-6"
      v-if="data?.results.length"
      :disabled-previous="disabledPrevious"
      :disabled-next="disabledNext"
      :page="page"
      @previousPage="previousPage"
      @nextPage="nextPage"
    ></Pagination>
  </div>
</template>
<script setup lang="ts">
import type { APIResponse } from '~~/types/APIResponse';
const searchTerm = ref('');
const page = ref(1);


const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data, pending: isFetching } = await useFetch<APIResponse>(url);

// Disable pagination depending on first or last page
const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value === data.value?.total_pages;
});
function previousPage() {
  if (!disabledPrevious.value) {
    page.value--;
  }
}

function nextPage() {
  if (!disabledNext.value) {
    page.value++;
  }
}
</script>
<style scoped>

.loader {
  /* Make the element a circle with a blue border */
  width: 30px;
  height: 30px;
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;

  /* Center the element horizontally and vertically */
  position: absolute;
 
  left: 50%;
  transform: translate(-50%, -50%);

  /* Apply a keyframe animation to make the element spin */
  animation: spin 2s linear infinite;
}

/* Define the keyframes for the animation */
@keyframes spin {
  /* Start from 0 degrees */
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  /* End at 360 degrees */
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>
