<script setup lang="ts">
import GeneralLayout from "../../../layout/GeneralLayout";
// import TipTapEditor from "../ElnikWebTest/components/TipTapEditor.vue";

import { ref } from "vue";

const route = useRoute();

const iframeCode = ref("");
const reportURL = ref<string | null>(null);

const catagories = computed(() => [
  { id: 1, title: "Why Manufacturing is Cool" },
  { id: 2, title: "All About Elnik" },
  { id: 3, title: "Education and Innovation" },
]);

// Style for the iframe container
const styleValue = ref("width: 504px; height: 1110px;");

// Function to extract the src attribute from the iframe code
const extractSrc = () => {
  const iframeSrcMatch = iframeCode.value.match(/src=["']([^"']+)["']/);
  if (iframeSrcMatch && iframeSrcMatch[1]) {
    reportURL.value = iframeSrcMatch[1];
  } else {
    console.warn("No valid iframe src found.");
  }
};

watch(
  () => iframeCode.value,
  () => {
    extractSrc();
  },
);

const submitIframe = () => {
  console.log("Submitted iframe:", iframeCode.value);
};
</script>

<template>
  <div class="flex flex-col space-y-8">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div class="flex flex-col items-center">
      <div class="justify-center flex-row w-full">
        <div></div>
        <h1
          class="w-full text-4xl font-bold uppercase text-center"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          ADD A POST
        </h1>
      </div>

      <!-- Blog Section -->
      <!--      <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">-->
      <!--        <form @submit.prevent="submitForm">-->
      <!--          &lt;!&ndash; Title &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label-->
      <!--              class="block text-gray-700 text-sm font-bold mb-2"-->
      <!--              for="title"-->
      <!--              >Title</label-->
      <!--            >-->
      <!--            <input-->
      <!--              type="text"-->
      <!--              id="title"-->
      <!--              v-model="title"-->
      <!--              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--              placeholder="Enter blog title"-->
      <!--            />-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Thumbnail &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label-->
      <!--              class="block text-gray-700 text-sm font-bold mb-2"-->
      <!--              for="thumbnail"-->
      <!--              >Thumbnail</label-->
      <!--            >-->
      <!--            <input-->
      <!--              type="file"-->
      <!--              id="thumbnail"-->
      <!--              @change="handleFileUpload"-->
      <!--              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--            />-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Author &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label-->
      <!--              class="block text-gray-700 text-sm font-bold mb-2"-->
      <!--              for="author"-->
      <!--              >Author</label-->
      <!--            >-->
      <!--            <input-->
      <!--              type="text"-->
      <!--              id="author"-->
      <!--              v-model="author"-->
      <!--              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--              placeholder="Enter author's name"-->
      <!--            />-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Subject &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label-->
      <!--              class="block text-gray-700 text-sm font-bold mb-2"-->
      <!--              for="subject"-->
      <!--              >Subject</label-->
      <!--            >-->
      <!--            <input-->
      <!--              type="text"-->
      <!--              id="subject"-->
      <!--              v-model="subject"-->
      <!--              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--              placeholder="Enter blog subject"-->
      <!--            />-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Tag &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label class="block text-gray-700 text-sm font-bold mb-2" for="tag"-->
      <!--              >Tag</label-->
      <!--            >-->
      <!--            <input-->
      <!--              type="text"-->
      <!--              id="tag"-->
      <!--              v-model="tag"-->
      <!--              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--              placeholder="Enter blog tag"-->
      <!--            />-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Blog Post (Rich Text) &ndash;&gt;-->
      <!--          <div class="mb-4">-->
      <!--            <label-->
      <!--              class="block text-gray-700 text-sm font-bold mb-2"-->
      <!--              for="blogPost"-->
      <!--              >Blog Post</label-->
      <!--            >-->
      <!--            <div class="mt-2">-->
      <!--              <TipTapEditor/>-->

      <!--            </div>-->
      <!--          </div>-->

      <!--          &lt;!&ndash; Submit Button &ndash;&gt;-->
      <!--          <div class="flex items-center justify-between">-->
      <!--            <button-->
      <!--              type="submit"-->
      <!--              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"-->
      <!--            >-->
      <!--              Add Post-->
      <!--            </button>-->
      <!--          </div>-->
      <!--        </form>-->
      <!--      </div>-->

      <div
        class="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 h-full flex flex-col items-center"
      >
        <!-- Textbox for iframe input -->
        <div class="w-full max-w-lg mb-4 h-full">
          <textarea
            v-model="iframeCode"
            placeholder="Paste your iframe code here"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          ></textarea>
          <div class="flex flex-row">
            <div>
              <h4>catagories</h4>
              <form class="w-1/2">
                <select
                  name="binter"
                  id="binter"
                  :class="
                    route.path === '/' ? 'text-slate-50' : 'text-gray-800'
                  "
                  class="h-[38px] block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
                >
                  <option
                    v-for="catagory in catagories"
                    :key="catagory.id"
                    class="p-2"
                  >
                    {{ catagory.title }}
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <!-- Container to display the iframe -->

        <iframe
          v-if="reportURL"
          :src="reportURL"
          :style="styleValue"
          frameborder="0"
          allowfullscreen
          title="Embedded post"
          class="overflow-scroll h-[300px]"
        ></iframe>

        <!-- Centered submit button -->
        <div class="w-full max-w-lg flex justify-center">
          <button
            @click="submitIframe"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
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
