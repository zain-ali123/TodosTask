<template>
    <h1>hello to read </h1>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const todos=ref([]);

onMounted(async()=>{
    await store.dispatch("todos/readTodos")
})
todos.value=computed(()=>store.getters["todos/getTodos"])
console.log("todos?>>>>>>>>",todos.value)



</script>