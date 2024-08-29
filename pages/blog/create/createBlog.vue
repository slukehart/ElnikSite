<script setup lang="ts">
import GeneralLayout from "../../../layout/GeneralLayout.vue";
import TipTapEditor from "../ElnikWebTest/components/TipTapEditor.vue";




const value = ref('');

onMounted(() => {});



</script>

<template>
  <div class="flex flex-col space-y-8">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-3 justify-center flex-row w-full">
        <div></div>
        <h1
          class="w-full text-4xl font-bold uppercase text-center"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          ADD A POST
        </h1>
      </div>

      <!-- Blog Section -->
      <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <form @submit.prevent="submitForm">
          <!-- Title -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
              >Title</label
            >
            <input
              type="text"
              id="title"
              v-model="title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter blog title"
            />
          </div>

          <!-- Thumbnail -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="thumbnail"
              >Thumbnail</label
            >
            <input
              type="file"
              id="thumbnail"
              @change="handleFileUpload"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <!-- Author -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="author"
              >Author</label
            >
            <input
              type="text"
              id="author"
              v-model="author"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter author's name"
            />
          </div>

          <!-- Subject -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="subject"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              v-model="subject"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter blog subject"
            />
          </div>

          <!-- Tag -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tag"
              >Tag</label
            >
            <input
              type="text"
              id="tag"
              v-model="tag"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter blog tag"
            />
          </div>

          <!-- Blog Post (Rich Text) -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="blogPost"
              >Blog Post</label
            >
            <div class="mt-2">
              <TipTapEditor/>


            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div id="footer" class="flex justify-center w-full mt-8">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add this to your component's style block or a global stylesheet */
.p-editor-toolbar {
  background-color: #f0f0f0; /* Change background color */
  border-bottom: 2px solid #ccc; /* Add a border */
  padding: 10px; /* Adjust padding */
}

.p-editor-toolbar .p-editor-button {
  color: #333; /* Change icon/text color */
}

.p-editor-toolbar .p-editor-button:hover {
  background-color: #ddd; /* Change background on hover */
}

</style>
