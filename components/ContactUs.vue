<script setup lang="ts">

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Editor from 'primevue/editor';
import {ref} from 'vue';

const inputContactMessage = ref("");

</script>

<template>
  <div class="flex flex-col items-center ">
    <div class="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 overflow-hidden bg-white ">
      <div class="px-4 py-6">
             <h2 class="font-bold text-5xl text-center text-gray-800 mb-4" style="font-family: ITCFranklinGothicStd-Demi">SEND US A MESSAGE</h2>
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="flex-1">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Name</label>
              <div>
                <input type="text" name="subject" id="subject" autocomplete="subject" class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-b-gray-300 focus-within:border-b-4 focus-within:border-indigo-600 shadow-md">
              </div>
            </div>
            <div class="flex-1">
              <label for="phone" class="block text-sm font-medium leading-6 text-gray-900 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Phone Number</label>
              <div>
                <input type="text" name="subject" id="subject" autocomplete="subject" class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-b-gray-300 focus-within:border-b-4 focus-within:border-indigo-600 shadow-md">
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="flex-1">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Email</label>
              <div>
                <input type="text" name="subject" id="subject" autocomplete="subject" class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-b-gray-300 focus-within:border-b-4 focus-within:border-indigo-600 shadow-md">
              </div>
            </div>
            <div class="flex-1">
              <label for="subject" class="block text-sm font-medium leading-6 text-gray-900 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Subject</label>
              <div>
                <input type="text" name="subject" id="subject" autocomplete="subject" class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-b-gray-300 focus-within:border-b-4 focus-within:border-indigo-600 shadow-md">
              </div>
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium leading-6 text-gray-900 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Message</label>
            <div class="mt-2">
              <textarea id="message" name="message" rows="4" class="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 shadow-md"></textarea>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button class=" uppercase h-12 w-20 flex justify-center" type="submit">
            <p class="border-b-4 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Submit</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Add any additional custom styles if necessary */
</style>
