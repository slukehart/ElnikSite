<script setup lang="ts">
import GeneralLayout from "../../layout/GeneralLayout.vue";
import type {BlogPost} from '../../types';
import {testBlogData} from '../../objects/testObjects';

const posts = ref<BlogPost[]>(testBlogData);



const selectedPost = ref<BlogPost>(posts.value[0]);
const selectPost = (postSelect: BlogPost) => {
  selectedPost.value = posts.value.find(
    (post) => post.id === postSelect.id,
  ) as BlogPost;
};
</script>

<template>
  <div class="flex flex-col space-y-8">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div class="flex flex-col items-center ">
      <div class="flex justify-center">
        <h1 class="text-4xl font-bold uppercase" style="font-family: ITCFranklinGothicStd-Demi">OUR LATEST UPDATES</h1>
      </div>
      <div class="flex justify-center w-full">
        <div class="grid grid-cols-2 gap-8 w-full max-w-6xl">
          <div id="blog-post-view" class=" bg-white p-6 overflow-auto overflow-y-scroll">
            <div v-if="selectedPost" class="max-h-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-4 uppercase" style="font-family: ITCFranklinGothicStd-Demi">
                {{ selectedPost.title }}
              </h2>
              <img :src="selectedPost.image" alt="Image" class="w-32 h-32 object-cover" />

              <p class="text-gray-600 mb-4">{{ selectedPost.description }}</p>
              <p class="text-gray-500 text-sm mb-4">
                Written by {{ selectedPost.author }} on {{ new Date(selectedPost.date).toLocaleDateString() }}
              </p>
              <p class="mb-4">{{ selectedPost.content }}</p>

            </div>
            <div v-else>
              <p class="text-gray-600">
                Please select a post to view its details.
              </p>
            </div>
          </div>
          <div class="flex items-center w-full">
            <main class="w-full max-h-[32rem] overflow-y-scroll">
              <div
                  v-for="post in posts"
                  :key="post.id"
                  class="flex flex-row mb-8 p-6 bg-white cursor-pointer"
                  @click="selectPost(post)"
              >
                <div class="mr-4">
                  <img :src="post.image" alt="Image" class="w-32 h-32 object-cover" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-gray-800 mb-2 uppercase" style="font-family: ITCFranklinGothicStd-Demi">
                    {{ post.title }}
                  </h2>
                  <p class="text-gray-500 text-sm mb-4">
                    Written by {{ post.author }} on {{ new Date(post.date).toLocaleDateString() }}
                  </p>
                  <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                  <a href="#" class="text-blue-500 hover:text-blue-700">Read more...</a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div id="footer" class="flex justify-center w-full">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
