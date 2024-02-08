<template>
    <div v-if="props" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
  
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Edit Todo
                </h3>
                <div class="mt-2">
                   <label for="title"><Title></Title></label>  
                  <input v-model="title" type="text" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Title">
                  <textarea v-model="description" class="mt-3 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" rows="3" placeholder="Description"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <ButtonSuccess @click="saveChanges()">Save Changes</ButtonSuccess>
            <button @click="$emit('closePopup')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, defineProps, onMounted, watch } from 'vue';

import { useStore } from 'vuex';
import ButtonSuccess from './buttons/ButtonSuccess.vue';

const props = defineProps({
  propName: Object
});

const title = ref('');
const description = ref('');
const id=ref('')
const store=useStore();
const emit=defineEmits();



// Watch for changes in the props and update the refs accordingly
watch(() => props.propName, (newValue) => {
  if (newValue) {
    title.value = newValue.title ?? '';
    description.value = newValue.description ?? '';
    id.value=newValue.id ?? '';
  }
});

const saveChanges =async () => {
   await store.dispatch("todos/updateTodo",{title:title.value,description:description.value,id:id.value})
   
   emit('closePopup')
};

const emitClosePopup = () => {
  // Emit event to close the popup
  emit('closePopup');
};
</script>

  
  <style scoped>
  /* Add any custom styles here */
  </style>
  