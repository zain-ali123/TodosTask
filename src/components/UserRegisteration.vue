<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="registerUser">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" >Email address</label>
            <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" >Password</label>
            <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
          <div>
            <label for="password-confirmation" >Password Confirmation</label>
            <input id="password-confirmation" v-model="form.passwordConfirmation" name="password-confirmation" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password Confirmation">
            <p v-if="passwordsMismatch" class="text-red-500 text-xs italic">Passwords do not match</p>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const form = ref({
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const passwordsMismatch = computed(() => {
    return form.value.password !== form.value.passwordConfirmation;
  });

  const registerUser = () => {
    if (passwordsMismatch.value) {
      console.log('Passwords do not match');
      // You can display further error handling logic here
      return;
    }
    // Here you can add your registration logic
    console.log(form.value);
  };
</script>

<style scoped>
  /* Add any custom styles here */
</style>
