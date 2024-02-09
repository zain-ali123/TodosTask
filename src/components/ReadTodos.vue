<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Todo List</h1>
    <input v-model="searchQuery" type="text" class="w-full mb-4 p-2 border rounded-md" placeholder="Search by title...">
    <LoaderComponent v-if="loading" />
    <div v-else>
      <div v-for="todo in filteredTodos" :key="todo.id" class="mb-4 border p-4 rounded">
        <h2 class="text-xl font-semibold mb-2">{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
      </div>
      <ButtonSuccess class="w-1/4 mx-auto mt-4" @click="navigateToManageTodos">Manage All Todos</ButtonSuccess>
      <ButtonSuccess class="w-1/4 mx-auto mt-4" @click="navigateToCreateTodos">Create Todo</ButtonSuccess>

      <div @scroll="handleScroll"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import LoaderComponent from './LoaderComponent.vue';
import ButtonSuccess from './buttons/ButtonSuccess.vue';
import { useRouter } from 'vue-router';

const store = useStore();
const todos = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const windowScrolled = ref(0);
const router=useRouter();

onMounted(async () => {
  try {
    await store.dispatch("todos/readTodos");
    todos.value = store.getters["todos/getTodos"].slice(0, 5);
    window.addEventListener('scroll', handleScroll);
  } finally {
    loading.value = false;
  }
});

const navigateToManageTodos = () => {
  router.push('/manage-todo')
};
const navigateToCreateTodos = () => {
  router.push('/create-todo')
};

const handleScroll = () => {
  windowScrolled.value = (document.documentElement.scrollHeight / 100) * 95;

  if (window.pageYOffset + window.innerHeight >= windowScrolled.value) {
    const currentLength = todos.value.length;
    const nextTodos = store.getters['todos/getTodos'].slice(currentLength, currentLength + 2);
    todos.value = [...todos.value, ...nextTodos];
  }
};

const filteredTodos = computed(() => {
  if (!searchQuery.value.trim()) {
    return todos.value;
  } else {
    return todos.value.filter(todo => todo.title.toLowerCase().includes(searchQuery.value.trim().toLowerCase()));
  }
});
</script>