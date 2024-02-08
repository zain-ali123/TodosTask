<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Todo List</h1>
      <LoaderComponent v-if="loading" />
      <div v-else>
        <div v-for="todo in todos" :key="todo.id" class="mb-4 border p-4 rounded">
          <h2 class="text-xl font-semibold mb-2">{{ todo.title }}</h2>
          <p>{{ todo.description }}</p>
        </div>
        <ButttonSuccess class="w-1/3 mx-auto mt-4" @click="navigateToManageTodos">Manage All Todos</ButttonSuccess>        <div  @scroll="handleScroll" >
        
    </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import ButttonSuccess from '../components/ButtonSuccess.vue';
  import LoaderComponent from './LoaderComponent.vue'
  
  const store = useStore();
  const todos = ref([]);
  const loading = ref(true);
  var windowScrolled= ref(0)
  onMounted(async () => {
    try {
      await store.dispatch("todos/readTodos");
      todos.value = store.getters["todos/getTodos"].slice(0,5);
    window.addEventListener('scroll', handleScroll);
    } finally {
      loading.value = false;
    }
  });
  
  const navigateToManageTodos = () => {
    console.log("navigate")
  };

  const handleScroll =  () => {
  
  windowScrolled.value=(document.documentElement.scrollHeight/100)*95


  if(window.pageYOffset+window.innerHeight>=windowScrolled.value){
    const currentLength = todos.value.length;
      const nextTodos =  store.getters['todos/getTodos'].slice(currentLength, currentLength + 2);
      todos.value = [...todos.value, ...nextTodos];
  }
   
};
  </script>
  
  <style scoped>
  /* Add any custom styles using Tailwind CSS */
  </style>
  