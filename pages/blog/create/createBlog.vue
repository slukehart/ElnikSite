<script setup lang="ts">
import GeneralLayout from "../../../layout/GeneralLayout.vue";

import DatePicker from "primevue/datepicker";

import { ref } from "vue";
const currentTheme = ref("surface-50"); // lara-light-purple or lara-dark-purple (1st parameter)

const route = useRoute();

const iframeCode = ref("");
const reportURL = ref<string | null>(null);
const title = ref("");
const author = ref("");
const date = ref<Date>(new Date());
const subject = ref("");
const tag = ref("");
const loading = ref(false);
const success = ref("");
const error = ref("");
const warning = ref("");
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
    reportURL.value = iframeCode.value;
  }
};

watch(
  () => iframeCode.value,
  () => {
    extractSrc();
  },
);

const submitIframe = async () => {
  if (reportURL.value) {
    try {
      loading.value = true;
      const postObject = {
        postUrl: reportURL.value,
        title: title.value,
        author: author.value,
        date: new Date(date.value),
        subject: subject.value,
        tag: tag.value,
      };
      await $fetch("/api/createLinkedInPost", {
        method: "POST",
        body: postObject,
      });
      reportURL.value = "";
      iframeCode.value = "";
      title.value = "";
      author.value = "";
      date.value = new Date();
      subject.value = "";
      tag.value = "";
      loading.value = false;
      success.value = "Post successfully added";
    } catch (e) {
      error.value = "There was an error adding your post";
    }
  } else {
    warning.value = "Please fill all fields";
    console.warn("no report url", typeof reportURL.value);
  }
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
      <NuxtLoadingIndicator v-if="loading" />
      <Message v-if="success" severity="success">{{ success }}</Message>
      <Message v-if="warning" severity="warn">{{ warning }}</Message>
      <Message v-if="error" severity="error">{{ error }}</Message>

      <div
        class="w-full max-w-4xl bg-white p-8 h-full flex flex-col items-center"
      >
        <!-- Textbox for iframe input -->
        <div class="w-full max-w-lg mb-4 h-full">
          <textarea
            v-model="iframeCode"
            placeholder="Paste your iframe code here"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          ></textarea>
          <div class="flex flex-row mb-4 justify-between">
            <div class="space-y-4">
              <label class="block text-gray-700 text-sm font-bold" for="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                v-model="title"
                class="h-[37px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter blog title"
              />
            </div>
            <div class="space-y-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="catatgories"
              >
                Catagories
              </label>
              <form class="w-full">
                <select
                  v-model="tag"
                  name="binter"
                  id="binter"
                  :class="
                    route.path === '/' ? 'text-slate-50' : 'text-gray-800'
                  "
                  class="block h-[37px] w-full shadow border rounded bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 focus:outline-none"
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
          <div class="flex flex-row mb-4 justify-between">
            <div class="space-y-4">
              <label
                class="block text-gray-700 text-sm font-bold"
                for="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="title"
                v-model="subject"
                class="h-[37px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter subject title"
              />
            </div>
            <div class="space-y-4">
              <label class="block text-gray-700 text-sm font-bold" for="author">
                Author
              </label>
              <input
                type="text"
                id="title"
                v-model="author"
                class="h-[37px] w-[162px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Authors name"
              />
            </div>
          </div>
          <div class="flex flex-row mb-4 justify-between">
            <div class="space-y-4">
              <label class="block text-gray-700 text-sm font-bold" for="date">
                Date
              </label>
              <DatePicker
                v-model="date"
                style="background-color: var(--p-datepicker-dropdow)"
              >
              </DatePicker>
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

.p-datepicker-calendar {
  background-color: #c2c4bb;
}
</style>
