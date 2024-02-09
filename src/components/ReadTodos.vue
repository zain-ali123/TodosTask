<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Todo List</h1>
    <input
      v-model="searchQuery"
      type="text"
      class="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Search by title..."
    />
    <LoaderComponent v-if="loading" />
    <div v-else>
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="mb-4 border p-4 rounded"
      >
        <h2 class="text-xl font-semibold mb-2">{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
      </div>
      <ButtonSuccess class="w-1/3 mx-auto mt-4" @click="navigateToManageTodos"
        >Manage All Todos</ButtonSuccess
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import LoaderComponent from "./LoaderComponent.vue";
import ButtonSuccess from "./buttons/ButtonSuccess.vue";

const store = useStore();
const todos = ref([]);
const loading = ref(true);
const searchQuery = ref("");
const error = ref(false);
const responseMessage = ref("");

onMounted(async () => {
  try {
    await store.dispatch("todos/readTodos");
    todos.value = store.getters["todos/getTodos"].slice(0, 5);
    responseMessage.value = store.getters["todos/getResponseMessage"];
    error.value = store.getters["todos/getError"];
    if (error.value == true) {
      alert(responseMessage.value);
    }
  } finally {
    loading.value = false;
  }
});

const navigateToManageTodos = () => {
  console.log("navigate");
};

const filteredTodos = computed(() => {
  return todos.value.filter((todo) => {
    return todo.title.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>

<style scoped>
/* Add any custom styles using Tailwind CSS */
</style>
