<template>
    <button :type="type" class="group relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'button'
    }
  });
  </script>
  