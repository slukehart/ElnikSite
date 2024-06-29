<script setup lang="ts">

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Editor from 'primevue/editor';
import {ref} from 'vue';

const inputContactMessage = ref("");

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-1/2 overflow-hidden shadow-xl m-4 rounded-lg">
      <div class="px-2 py-4 flex justify-center">
        <div class="font-bold text-xl mb-2">Contact Us</div>
      </div>
      <div class=" flex justify-center">
        <div
            class="space-y-4"
        >
          <InputGroup
              class="flex flex-row border-2 w-full border-zinc-600 rounded-md"
          >
            <InputGroupAddon style="margin: 0">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
                />
              </svg>
            </InputGroupAddon>
            <InputText
                placeholder="Name"
                class="w-full"
                style="border: none"
            />
          </InputGroup>
          <div class="flex flex-row space-x-4">
            <InputGroup
                class="flex flex-row w-1/2 border-2 border-zinc-600 rounded-md"
            >
              <InputGroupAddon style="margin: 0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                  <path
                      fill="currentColor"
                      d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                  />
                </svg>
              </InputGroupAddon>
              <InputText placeholder="email" />
            </InputGroup>
            <InputGroup
                class="flex flex-row w-1/2 border-2 border-zinc-600 rounded-md"
            >
              <InputGroupAddon style="margin: 0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                  <path
                      fill="currentColor"
                      d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.772 14.772 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
              </InputGroupAddon>
              <InputText placeholder="phone number" />
            </InputGroup>
          </div>
        </div>
      </div>
      <Editor
          v-model="inputContactMessage"
          editorStyle="height: 320px"
          class="px-6 py-4 w-full items-center justify-center"
          inputtext.focus.border.color="none"
      />
      <div class="flex justify-center px-6 py-4">
        <button
            class="bg-blue-500 btn-product hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-product:hover {
  background-color: #99a4b9; /* Darker shade for hover */
}

</style>