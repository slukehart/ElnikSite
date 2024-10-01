<template>
  <div class="relative inline-block text-left">
    <!-- Dropdown button displaying the selected option -->
    <div>
      <button
        @click="toggleDropdown"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {{ selectedProcess ? selectedProcess : "Select a Process" }}
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          v-for="(process, index) in processes"
          :key="index"
          @click="selectProcess(process)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          role="menuitem"
        >
          {{ process }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of process options
const processes = [
  "No Filter",
  "Medical",
  "Aerospace",
  "Firearms",
  "Fashion / Lifestyle",
  "Electronics",
  "Industrial / Automotive",
];

// Track the dropdown state and selected option
const isOpen = ref(false);
const selectedProcess = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

// Function to set the selected process
function selectProcess(process) {
  selectedProcess.value = process;
  isOpen.value = false; // Close dropdown after selection
}
</script>

<style scoped>
/* Optional: Add any custom styles for further refinement */
</style>
