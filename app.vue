<template>
  <NuxtLayout>
    <NuxtPage class="w-full background-color-page" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUserAuthStore } from "../ElnikWebTest/stores/UserAuthStore";
import { useRoute } from "vue-router";

onMounted(() => {
  if (useRoute().path === "/") {
    navigateTo("/Home");
  }
});

const userStore = useUserAuthStore();

const { authStore } = storeToRefs(userStore);

const linkedInPosts = useLinkedInPostStore();
const { postsList } = storeToRefs(linkedInPosts);
</script>

<style></style>
