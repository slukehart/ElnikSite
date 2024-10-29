<script setup lang="ts">
import type { LinkedInPost } from "types";
import GeneralLayout from "../../../layout/GeneralLayout.vue";
import { storeToRefs } from "pinia";
import { useLinkedInPostStore } from "../../../stores/LinkedInPostStore";
import { onMounted } from "vue";
import Message from "primevue/message";
import { useToast } from "primevue/usetoast";
import uplaodFileImageToFirebase from "../../../composables/uplaodFileImageToFirebase";
const toast = useToast();

import FileUpload from "primevue/fileupload";

const selectedPost = ref<LinkedInPost | null>(null);
const posts = useLinkedInPostStore();
const route = useRoute();

const fileUplaod = ref<File>();
const titleUpdate = ref("");
const authorUpdate = ref("");
const subjectUpdate = ref("");
const tagUpdate = ref("");
const loading = ref(false);
const success = ref("");
const error = ref("");
const warning = ref("");
const idVal = ref("");
const image = ref();
const imageLink = ref("");
const catagories = computed(() => [
  { id: 1, title: "Why Manufacturing is Cool" },
  { id: 2, title: "All About Elnik" },
  { id: 3, title: "Education and Innovation" },
]);

const { uploadImage } = uplaodFileImageToFirebase();

const { postsList } = storeToRefs(posts);

onMounted(async () => {
  await posts.getLinkedInPosts();

  if (postsList) {
    const { subject, tag, title, id, author } = postsList.value.find(
      (post) => post.id === route.params.id,
    ) as LinkedInPost;
    titleUpdate.value = title;
    authorUpdate.value = author;
    subjectUpdate.value = subject;
    tagUpdate.value = tag;
  }
});

const fileupload = ref();
const onFileSelect = (event: any) => {
  const files = event.files; // This gives you an array of selected files

  // You can now access the selected file(s)
  if (files.length > 0) {
    const uploadedFile = files[0]; // Get the first file
    const blob = new Blob([uploadedFile], { type: uploadedFile.type });
    fileUplaod.value = uploadedFile;
    image.value = blob;
    imageLink.value = uploadedFile.objectUrl;
  }
};

const submitUpdates = async () => {
  loading.value = true;

  if (
    titleUpdate.value &&
    authorUpdate.value &&
    subjectUpdate.value &&
    tagUpdate.value
  ) {
    try {
      const firebaseData = await uploadImage(fileUplaod.value);
      const updateObj = {
        title: titleUpdate.value,
        author: authorUpdate.value,
        subject: subjectUpdate.value,
        tag: tagUpdate.value,
        imageLink: firebaseData,
        id: route.params.id,
      };

      await $fetch("/api/updateLinkedInPost", {
        method: "POST",
        body: updateObj,
      });
      loading.value = false;
      success.value = "Post successfully updated";
      image.value = "";
    } catch (e) {
      error.value =
        "There was an error updating your post. Please contact support";
    }
  } else {
    warning.value = "Please fill all fields";
  }
};

const clearMessage = () => {
  success.value = "";
  error.value = "";
  warning.value = "";
};
</script>

<template>
  <div class="flex flex-col first-neg-margin h-full">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div class="h-svh flex flex-col justify-center items-center mt-10">
      <NuxtLoadingIndicator v-if="loading" />
      <div v-if="success" class="banner success flex flex-row justify-between">
        <p>{{ success }}</p>
        <svg
          class="cursor-pointer"
          @click="clearMessage"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 4l10 16m0-16L7 20"
          />
        </svg>
      </div>

      <!-- Error Banner -->
      <div v-if="error" class="banner error flex flex-row justify-between">
        {{ error }}
        <svg
          class="cursor-pointer"
          @click="clearMessage"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 4l10 16m0-16L7 20"
          />
        </svg>
      </div>

      <!-- Warning Banner -->
      <div v-if="warning" class="banner warning flex flex-row justify-between">
        {{ warning }}
        <svg
          @click="clearMessage"
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 4l10 16m0-16L7 20"
          />
        </svg>
      </div>
      <!-- Centered submit button -->
      <div class="w-full max-w-lg flex justify-center mt-4">
        <button
          @click="submitUpdates()"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>

      <div
        class="w-full max-w-4xl bg-white p-8 h-full flex flex-col items-center"
      >
        <!-- Textbox for iframe input -->
        <div class="w-full max-w-lg mb-4 h-full">
          <div class="flex flex-row mb-4 justify-between">
            <div class="space-y-4">
              <label class="block text-gray-700 text-sm font-bold" for="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                v-model="titleUpdate"
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
                  v-model="tagUpdate"
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
                v-model="subjectUpdate"
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
                v-model="authorUpdate"
                class="h-[37px] w-[162px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Authors name"
              />
            </div>
          </div>
          <div class="flex flex-row mb-4 justify-between">
            <div class="space-y-4">
              <label class="block text-gray-700 text-sm font-bold" for="date">
                Thumbnail Upload
              </label>
              <div class="card flex flex-col gap-6 items-center justify-center">
                <Toast />
                <FileUpload
                  ref="fileupload"
                  mode="basic"
                  name="demo[]"
                  accept="image/*"
                  :maxFileSize="10000000"
                  @select="onFileSelect"
                  v-model="image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Container to display the iframe -->
      </div>
    </div>

    <div id="footer" class="flex justify-center w-full">
      <FooterComponent />
    </div>
  </div>
</template>

<style></style>
