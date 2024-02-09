<template>
    <nav class="bg-gray-800 p-4 text-white flex justify-between ">
      <div>
        <p>Tasky</p>
      </div>
      <button @click="logout">Logout</button>
    </nav>
  </template>
  
  <script setup>
import { pushScopeId } from 'vue';
import {  useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router=useRouter();

 
 
  
const store=useStore();
const logout= async ()=>{
    console.log("logoting")
    await store.dispatch('user/loogoutUser')
    router.push('/')

};
  </script>
  
  <style scoped>
  /* Add any custom styles using Tailwind CSS */
  </style>
  