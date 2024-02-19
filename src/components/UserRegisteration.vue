<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="registerUser">
        <div class="flex text-sm items-center justify-center ">
          <p>Already have an account? </p>
          <RouterLink to="/login" class="text-blue-600 hover:text-blue-700 mx-1">Login</RouterLink>

        </div>

        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address">Email address</label>
            <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password">password</label>
            <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="password" />
          </div>
          <div>
            <label for="password-confirmation">password Confirmation</label>
            <input id="password-confirmation" v-model="form.password_confirmation" name="password-confirmation"
              type="password" autocomplete="current-password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="password Confirmation" />
            <p v-if="passwordsMismatch" class="text-red-500 text-xs italic">
              passwords do not match
            </p>
          </div>
        </div>

        <div>
          <ButtonSuccess type="submit">
            Register
          </ButtonSuccess>
 

        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ButtonSuccess from "./buttons/ButtonSuccess.vue";
import { useRouter } from "vue-router";

const responseMessage = ref(null);
const error = ref(false);

const form = ref({
  email: "",
  password: "",
  password_confirmation: "",
});
const store = useStore();
const router = useRouter();

const passwordsMismatch = computed(() => {
  return form.value.password !== form.value.password_confirmation;
});

const registerUser = async () => {
  if (passwordsMismatch.value) {
    // console.log('passwords do not match');

    return;
  }
  // console.log(form.value)
  await store.dispatch("user/registerUser", form.value);

  responseMessage.value = store.getters["user/getResponseMessage"];
  alert(responseMessage.value);

  error.value = store.getters["user/getError"];
  // console.log(error.value)
  if (error.value == false) {
    // console.log("in if")
    router.push("/");
  }
};


</script>
