<template>
  <div class="flex justify-center items-center h-32">
    <input
      class="px-2 py-1 border border-grey-800 rounded-md min-w-64"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      type="text"
      placeholder="Search..."
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
</script>