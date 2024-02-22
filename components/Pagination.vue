<template>
  <div class="flex justify-center">
    <button v-if="!disabledPrevious" @click="previousPage" class="px-4 py-2 text-m border rounded-lg">Previos</button>
    <div class="px-4 py-2 text-m border rounded-lg mx-3">{{ page }}</div>
    <button v-if="!disabledNext" @click="nextPage" class="px-4 py-2 text-m border rounded-lg">Next</button>
  </div>
</template>

<script setup lang="ts">

const page = ref(1);
const totalPages = ref(0);

const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value === totalPages.value;
});

function previousPage() {
  page.value--;
}

function nextPage() {
  page.value++;
}
</script>