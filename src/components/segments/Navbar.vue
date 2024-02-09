<template>
  <nav class="bg-gray-800 p-4 text-white flex justify-between">
    <div>
      <p>Tasky</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

const error = ref(false);
const responseMessage = ref("");

const router = useRouter();

const store = useStore();

const logout = async () => {
  // console.log("logoting");
  await store.dispatch("user/loogoutUser");
  responseMessage.value = store.getters["todos/getResponseMessage"];
  error.value = store.getters["todos/getError"];
  if (error.value == true) {
    alert(responseMessage.value);
  } else {
    router.push("/");
  }
};
</script>
