<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Todo
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="createTodo">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="title">Title</label>
            <input id="title" v-model="todo.title" name="title" type="text" required
              class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Title" />
          </div>
          <div>
            <label for="description">Description</label>
            <textarea id="description" v-model="todo.description" name="description" rows="3" required
              class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Description"></textarea>
          </div>
        </div>

        <div>
          <ButtonSuccess type="submit"> Create Todo </ButtonSuccess>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonSuccess from "./buttons/ButtonSuccess.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const todo = ref({
  title: "",
  description: "",
});
const store = useStore();
const error = ref(false);
const responseMessage = ref("");

const createTodo = async () => {
  await store.dispatch("todos/createTodo", todo.value);

  responseMessage.value = store.getters["todos/getResponseMessage"];
  error.value = store.getters["todos/getError"];
  if (error.value == true) {
    alert(responseMessage.value);
  }

  router.push("/read-todos");

  console.log(todo.value);
};
</script>
