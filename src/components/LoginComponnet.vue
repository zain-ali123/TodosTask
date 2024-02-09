<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="LoginUser">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address">email address</label>
            <input id="email-address" v-model="form.email" required name="email" type="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="email address" />
          </div>
          <div>
            <label for="password">password</label>
            <input id="password" v-model="form.password" required name="password" type="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="password" />
          </div>
        </div>

        <div>
          <ButtonSuccess type="submit"
            class="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </ButtonSuccess>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import ButtonSuccess from "./buttons/ButtonSuccess.vue";
import { useRouter } from "vue-router";

const responseMessage = ref("");
const error = ref(false);

const form = ref({
  email: "",
  password: "",
});
const store = useStore();
const router = useRouter();

const LoginUser = async () => {
  await store.dispatch("user/authenticateUser", form.value);

  responseMessage.value = store.getters["user/getResponseMessage"];

  alert(responseMessage.value);
  error.value = store.getters["user/getError"];
  if (error.value == false) {
    if (localStorage.getItem("token")) {
      router.push("/read-todos");
    }
  }

  // console.log(form.value);
};
</script>
