import { defineStore } from "pinia";
import type { LinkedInPost, LinkedInPostResults } from "../types";

export const useLinkedInPostStore = defineStore("LinkedInPostsStore", () => {
  const postsList = ref<LinkedInPost[]>([]);

  onMounted(async () => {
    try {
      const data: LinkedInPostResults = await $fetch("/api/getLinkedPosts", {
        method: "GET",
      });

      postsList.value = data.message as LinkedInPost[];
    } catch (e) {
      console.error(e);
      return undefined;
    }
  });
  async function getLinkedInPosts() {
    try {
      const data: LinkedInPostResults = await $fetch("/api/getLinkedPosts", {
        method: "GET",
      });

      postsList.value = data.message as LinkedInPost[];
      return data;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }

  return {
    postsList,
    getLinkedInPosts,
  };
});
