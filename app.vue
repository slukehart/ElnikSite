<template>

    <NuxtPage class="w-full" />

</template>

<script setup lang="ts">
import {useUserAuthStore} from "../ElnikWebTest/stores/UserAuthStore";

const userStore = useUserAuthStore();
const {authStore} = storeToRefs(userStore);
</script>
