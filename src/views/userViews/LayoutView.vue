<template>
    <div>
      <Navbar />
      <router-view />
    </div>
  </template>
  
  <script setup>
  import Navbar from "../../components/segments/Navbar.vue";

  
  
  </script>
  <!-- <script>
//   import 
import { useRoute, useRouter } from "vue-router";
  const router=useRouter();
  const route=useRoute();
  export default {
    created() {
      // Redirect to 'readTodos' route if no child route matched
      if (!this.$route.matched.length) {
        router.push({ name: 'readTodos' });
      }
    }
  }
  </script> -->