<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = ref(useRoute().path);
</script>

<template>
  <div class="flex flex-col items-center justify-content-center">
    <div
      class="overflow-hidden"
      :class="route === '/Home' ? 'backdrop-blur-lg lg:w-1/2' : ' mt-10 w-full'"
    >
      <div class="px-4">
        <h2
          class="font-bold text-5xl text-center mb-4 mt-4"
          :class="route === '/Home' ? 'text-slate-50' : 'text-slate-950'"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          SEND US A MESSAGE
        </h2>
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="flex-1">
              <label
                for="name"
                class="block text-sm font-medium leading-6 uppercase"
                :class="route === '/Home' ? 'text-slate-50' : 'text-gray-800'"
                style="font-family: ITCFranklinGothicStd-Demi"
                >Name</label
              >
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autocomplete="subject"
                  :class="{ 'text-white': route === '/Home' }"
                  class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
                />
              </div>
            </div>
            <div class="flex-1">
              <label
                for="phone"
                class="block text-sm font-medium leading-6 uppercase"
                :class="route === '/Home' ? 'text-slate-50' : 'text-gray-800'"
                style="font-family: ITCFranklinGothicStd-Demi"
                >Phone Number</label
              >
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autocomplete="subject"
                  :class="{ 'text-white': route === '/Home' }"
                  class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="flex-1">
              <label
                for="email"
                class="block text-sm font-medium leading-6 uppercase"
                :class="route === '/Home' ? 'text-slate-50' : 'text-gray-800'"
                style="font-family: ITCFranklinGothicStd-Demi"
                >Email</label
              >
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autocomplete="subject"
                  :class="{ 'text-white': route === '/Home' }"
                  class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
                />
              </div>
            </div>
            <div class="flex-1">
              <label
                for="subject"
                class="block text-sm font-medium leading-6 uppercase"
                :class="route === '/Home' ? 'text-slate-50' : 'text-gray-800'"
                style="font-family: ITCFranklinGothicStd-Demi"
                >Subject</label
              >
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autocomplete="subject"
                  :class="{ 'text-white': route === '/Home' }"
                  class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
                />
              </div>
            </div>
          </div>
          <RequestAFreeQuote class="w-full" />

          <div>
            <label
              for="message"
              class="block text-sm font-medium leading-6 uppercase"
              :class="route === '/Home' ? 'text-slate-50' : 'text-gray-800'"
              style="font-family: ITCFranklinGothicStd-Demi"
              >Message</label
            >
            <div class="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                :class="{ 'text-white': route === '/Home' }"
                class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm focus:outline-none sm:leading-6 shadow-md"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button class="uppercase h-12 w-20 flex justify-center" type="submit">
            <p
              class="border-b-4 border-b-black uppercase"
              :class="
                route === '/Home'
                  ? ' text-slate-50 border-b-white'
                  : 'text-gray-800 border-b-black'
              "
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              Submit
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles if necessary */
</style>
