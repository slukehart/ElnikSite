<script setup lang="ts">
import signIn from "../composables/signIn";
import { navigateTo } from "nuxt/app";
import type { UserCredential } from "@firebase/auth";
import signOutUser from "../composables/signOut";

const { signInWithEmail, loading } = signIn();
const { signOutFirebase } = signOutUser();
const userStore = useUserAuthStore();
const linkedInPosts = useLinkedInPostStore();
const { postsList } = storeToRefs(linkedInPosts);
const { authStore } = storeToRefs(userStore);
const email = ref("");
const password = ref("");
const errorMsg = ref<string | UserCredential>("");

const login = async () => {
  errorMsg.value = "";
  const result = await signInWithEmail(email.value, password.value);
  switch (result.status) {
    case 200:
      navigateTo({
        path: `/blog/${postsList.value ? postsList.value[0]?.id : ""}`,
      });
      break;
    case 401:
      errorMsg.value = result.message;
      break;
    case 403:
      errorMsg.value = result.message;
      break;
    case 500:
      errorMsg.value = result.message;
      break;
  }
};

const logOut = async () => {
  await signOutFirebase();
};
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-900 h-screen">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0"
    >
      <a
        href="/Home"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img src="/images/ELNIK_SHADOW_LOGO_1_Edit.png" alt="logo" />
      </a>
      <div
        v-if="authStore !== 'authed'"
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form @submit.prevent="login" class="space-y-4 md:space-y-6">
            <div
              v-if="errorMsg"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{{ errorMsg }}</span>
            </div>
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col"
            >
              Sign in to your account
              <svg
                v-if="loading"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="3.5" r="1.5" fill="#b0b0b0" opacity="0">
                  <animateTransform
                    attributeName="transform"
                    calcMode="discrete"
                    dur="2.4s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;90 12 12;180 12 12;270 12 12"
                  />
                  <animate
                    attributeName="opacity"
                    dur="0.6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;1;0"
                  />
                </circle>
                <circle cx="12" cy="3.5" r="1.5" fill="#b0b0b0" opacity="0">
                  <animateTransform
                    attributeName="transform"
                    begin="0.2s"
                    calcMode="discrete"
                    dur="2.4s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="30 12 12;120 12 12;210 12 12;300 12 12"
                  />
                  <animate
                    attributeName="opacity"
                    begin="0.2s"
                    dur="0.6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;1;0"
                  />
                </circle>
                <circle cx="12" cy="3.5" r="1.5" fill="#b0b0b0" opacity="0">
                  <animateTransform
                    attributeName="transform"
                    begin="0.4s"
                    calcMode="discrete"
                    dur="2.4s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="60 12 12;150 12 12;240 12 12;330 12 12"
                  />
                  <animate
                    attributeName="opacity"
                    begin="0.4s"
                    dur="0.6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;1;0"
                  />
                </circle>
              </svg>
            </h1>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required="true"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
              />
            </div>
            <!-- <div class="flex items-center justify-between">
              <a
                href="#"
                class="text-sm font-medium text-slate-50 hover:underline dark:text-primary-500"
                >Forgot password?</a
              >
            </div> -->
            <button
              @click="login"
              class="w-full text-slate-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div v-else-if="authStore === 'authed'">
        <button @click="logOut">
          <p class="text-slate-50">Log Off</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
