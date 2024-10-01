<template>
<NuxtLayout>
    <NuxtPage class="w-full" />
</NuxtLayout>

</template>

<script setup lang="ts">
import {useUserAuthStore} from "../ElnikWebTest/stores/UserAuthStore";
import { useRoute } from "vue-router";

onMounted(() => {
  if (useRoute().path === '/') {
    navigateTo('/Home')
  }
})

const userStore = useUserAuthStore();
const {authStore} = storeToRefs(userStore);
</script>
