<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-400 space-x-24">
    <div class="text-white space-y-4">
      <p class="text-4xl font-bold">TASKY</p>
      <p class="text-3xl font-semibold">Tasky helps you to manage your tasks</p>
    </div>
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome to TASKY
      </h2>

      <div class="flex space-x-8">
        <ButtonSuccess @click="redirectToLogin">Login</ButtonSuccess>

        <ButtonSuccess @click="redirectToRegister">Register</ButtonSuccess>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ButtonSuccess from "./buttons/ButtonSuccess.vue";

const router = useRouter();

const redirectToLogin = () => {
  router.push("/login");
};

const redirectToRegister = () => {
  router.push("/registeration");
};
</script>
