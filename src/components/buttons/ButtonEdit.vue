<template>
  <button :type="type"
    class="group relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>
