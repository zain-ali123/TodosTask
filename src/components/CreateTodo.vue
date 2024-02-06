<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Todo</h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="createTodo">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="title" >Title</label>
              <input id="title" v-model="todo.title" name="title" type="text" required class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Title">
            </div>
            <div>
              <label for="description" >Description</label>
              <textarea id="description" v-model="todo.description" name="description" rows="3" required class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Description"></textarea>
            </div>
          </div>
  
          <div>
            <button type="submit" class=" relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
  
    const todo = ref({
      title: '',
      description: ''
    });
  
    const createTodo = () => {
      // Here you can add your logic to create a new todo
      console.log('Creating todo:', todo.value);
    };
  </script>
  
  <style scoped>
    /* Add any custom styles here */
  </style>
  