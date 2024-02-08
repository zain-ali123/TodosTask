<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Todo List</h1>
    <LoaderComponent v-if="loading" />
    <div v-else>
      <div v-for="todo in todos" :key="todo.id" class="mb-4 border p-4 rounded">
        <h2 class="text-xl font-semibold mb-2">{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
        <ButtonEdit @click="openEditPopup(todo)">Edit Todo</ButtonEdit>
        <ButtonDanger @click="deleteTodo(todo.id)">Delete Todo</ButtonDanger>
      </div>
    </div>
    <PopUp v-show="isEditPopupOpen" :prop-name="todoToBeEdit" @close-popup="closeEditPopup" />
    <div  @scroll="handleScroll" >
        
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import LoaderComponent from './LoaderComponent.vue';
import ButtonEdit from './ButtonEdit.vue';
import ButtonDanger from './ButtonDanger.vue';
import PopUp from './PopUp.vue';
import { defineProps } from 'vue';

const store = useStore();
const todos = ref([]);
const loading = ref(true);

const isEditPopupOpen = ref(false);
const todoToBeEdit = ref(null);

onMounted(async () => {
  try {
    await store.dispatch("todos/readTodos");
    todos.value = store.getters["todos/getTodos"].slice(0,5);
    window.addEventListener('scroll', handleScroll);
  } finally {
    loading.value = false;
  }
});

const openEditPopup = (todo) => {
  todoToBeEdit.value = todo;
  isEditPopupOpen.value = true;
};

const closeEditPopup = async () => {
  await store.dispatch("todos/readTodos");
  todos.value = store.getters["todos/getTodos"];
  
  isEditPopupOpen.value = false;
};

const deleteTodo = async (id) => {
  const answer = confirm("Are you sure you want to delete this todo?");
  if (answer) {
    await store.dispatch("todos/deleteTodo", id);
    await store.dispatch("todos/readTodos");
    todos.value = store.getters["todos/getTodos"];
  }
};



// const visibleTodos = computed(() => todos.value);
var windowScrolled= ref(0)

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