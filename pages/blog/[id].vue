<script setup lang="ts">
import GeneralLayout from "../../layout/GeneralLayout.vue";
import type { LinkedInPost, LinkedInPostResults } from "../../types";
import { useLinkedInPostStore } from "../../stores/LinkedInPostStore";
import { vInfiniteScroll } from "@vueuse/components";

const userStore = useUserAuthStore();

const { authStore } = storeToRefs(userStore);
const el = ref<HTMLElement | null>(null);

const posts = useLinkedInPostStore();
const { getLinkedInPosts } = useLinkedInPostStore();
const { postsList } = storeToRefs(posts);
const route = useRoute();
const selectedPost = ref<LinkedInPost>();
const postResults = ref<LinkedInPostResults | undefined>(undefined);

onMounted(async () => {
  if (postsList.value === undefined) {
    const result = await getLinkedInPosts();
    postResults.value = result;
    const posts = result?.message as LinkedInPost[];
    selectedPost.value = posts.find(
      (post: LinkedInPost) => post.id === route.params.id,
    );
  } else {
    const result = await getLinkedInPosts();
    postResults.value = result;

    selectedPost.value = postsList.value?.find(
      (post: LinkedInPost) => post.id === route.params.id,
    );
  }
});

const goToPost = async (post: LinkedInPost) => {
  selectedPost.value = post;
};
const deletePost = async (post: LinkedInPost) => {
  try {
    const result: LinkedInPostResults = await $fetch("/api/deletePost", {
      method: "DELETE",
      body: post,
    });
    if (result.status === 200) {
      postsList.value = result.message as LinkedInPost[];
      selectedPost.value = postsList.value[0];
    } else {
      alert("There was an error deleting your post, please try again");
    }
  } catch (e) {
    alert("There was an error deleting your post, please contact support");
  }
};

async function onLoadMore() {
  if (postsList.value) {
    const length = postsList.value.length;
    const result = await $fetch("/api/getLinkedPosts", {
      method: "GET",
      query: postResults.value?.next_set,
    });
    if (result.status === 200) {
      const postListResult: LinkedInPost[] = result.message;
      console.log(postListResult[0]);
      postListResult.forEach((post) => {
        postsList.value.push(post);
      });
    }
  }
}
</script>

<!-- <template></template> -->

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
          OUR LATEST UPDATES
        </h1>

        <NuxtLink v-if="authStore === 'authed'" to="/blog/create/createBlog">
          <button
            class="flex justify-end h-auto btn-product-main w-full text-sm text-black font-bold px-6 mb-6 backdrop-blur-2xl border-black"
          >
            <p
              class="uppercase text-center"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              Add a Blog
            </p>
          </button>
        </NuxtLink>
      </div>
      <div class="flex justify-center w-full">
        <div class="grid grid-cols-2 gap-8 w-full max-w-6xl">
          <div
            id="blog-post-view"
            class="bg-white p-6 overflow-auto overflow-y-scroll"
          >
            <div v-if="selectedPost" class="h-full">
              <h2
                class="text-3xl font-bold text-gray-800 mb-4 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ selectedPost?.title }}
              </h2>
              <!-- <img alt="Image" class="w-16 h-16 object-cover" /> -->

              <p class="text-gray-600 mb-4">{{ selectedPost?.subject }}</p>
              <p class="text-gray-500 text-sm mb-4">
                Written by {{ selectedPost?.author }} on
                {{
                  selectedPost?.date
                    ? new Date(selectedPost?.date).toLocaleDateString()
                    : new Date().toLocaleDateString()
                }}
              </p>
              <iframe
                v-if="selectedPost?.postUrl"
                :src="selectedPost.postUrl"
                frameborder="0"
                allowfullscreen
                title="Embedded post"
                class="overflow-scroll h-full w-full"
              ></iframe>
            </div>
            <div v-else>No Post Found</div>
          </div>
          <div class="flex items-center w-full">
            <main
              class="w-full max-h-[32rem] overflow-y-scroll"
              ref="el"
              v-infinite-scroll="[onLoadMore, { distance: 1 }]"
            >
              <div
                v-for="post in postsList"
                :key="post.id"
                class="flex flex-row mb-8 p-6 bg-white cursor-pointer"
              >
                <div class="mr-4">
                  <img alt="Image" class="w-32 h-32 object-cover" />
                </div>
                <div class="w-full">
                  <h2
                    class="text-2xl font-bold text-gray-800 mb-2 uppercase"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    {{ post.title }}
                  </h2>
                  <p class="text-gray-500 text-sm mb-4">
                    Written by {{ post.author }} on
                    {{ new Date(post.date).toLocaleDateString() }}
                  </p>
                  <p class="text-gray-600 mb-4">{{ post.subject }}</p>
                  <button
                    class="text-blue-500 hover:text-blue-700"
                    @click="goToPost(post)"
                  >
                    Read more...
                  </button>
                </div>
                <div class="flex flex-row" v-if="authStore === 'authed'">
                  <div>
                    <button @click="deletePost(post)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#e93f3f"
                          d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14zm1-1h10V6H7zm2.808-2h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#3f80e9"
                        d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h8.386l-1 1H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-7.489l1-1v8.489q0 .69-.462 1.153T18.384 20zM10 14v-2.615l8.944-8.944q.166-.166.348-.23t.385-.063q.189 0 .368.064t.326.21L21.483 3.5q.16.166.242.365t.083.4t-.061.382q-.06.18-.226.345L12.52 14zm10.814-9.715l-1.112-1.17zM11 13h1.092l6.666-6.666l-.546-.546l-.61-.584L11 11.806zm7.212-7.211l-.61-.585zl.546.546z"
                      />
                    </svg>
                  </div>
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
