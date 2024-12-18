<script setup lang="ts">
import type { PropType } from "vue";
import { useRoute } from "vue-router";

const { isMobile, isDesktop, isMacOS } = useDevice();

const props = defineProps({
  hero: {
    type: Object as PropType<HTMLElement | null | undefined>,
  },
});

const linkedInPosts = useLinkedInPostStore();
const { postsList } = storeToRefs(linkedInPosts);
const postsForNav = ref<any[]>();

onMounted(async () => {
  await linkedInPosts.getLinkedInPosts();
  postsForNav.value = postsList.value;
});

import scrollToTopComposable from "../composables/scrollToTopComposable";

const { scrollToSection } = scrollToTopComposable();
</script>

<template>
  <div class="footer h-auto bg-gray-700 w-full">
    <div class="flex flex-row justify-center align-middle">
      <div class="flex lg:flex-row items-center w-full">
        <div class="flex justify-center items-center w-1/3 lg:p-6">
          <nav
            class="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-3 md:gap-2 text-center"
          >
            <NuxtLink to="/Home"
              ><p class="text-sm uppercase">HOME</p></NuxtLink
            >
            <NuxtLink to="/About"
              ><p class="text-sm uppercase">ABOUT</p></NuxtLink
            >
            <NuxtLink to="/ProductPage"
              ><p class="text-sm uppercase">PRODUCTS</p></NuxtLink
            >
            <NuxtLink to="/Brochures"
              ><p class="text-sm uppercase">Brochures</p></NuxtLink
            >
            <NuxtLink to="/Careers"
              ><p class="text-sm uppercase">CAREERS</p></NuxtLink
            >
            <NuxtLink v-if="postsForNav" :to="`/blog/${postsForNav[0].id}`"
              ><p class="text-sm uppercase">BLOG</p></NuxtLink
            >
            <a href="https://dshtech.com/" class="text-sm uppercase">
              DSH TECHNOLOGIES
            </a>

            <NuxtLink to="/Contact"><p class="text-sm">CONTACT</p></NuxtLink>
            <NuxtLink><p class="text-sm"></p></NuxtLink>
          </nav>
        </div>
        <div class="border-l-2 h-3/4 border-zinc-900 mt-6"></div>
        <div class="flex flex-col justify-center items-center w-1/3">
          <div id="footer-logo" class="px-6 py-4">
            <a
              v-if="useRoute().path === '/Home'"
              href="#"
              @click.prevent="scrollToSection(props?.hero)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300 flex justify-center"
            >
              <img class="w-3/4" src="/images/logo-10.png" alt="Elnik"
            /></a>
            <NuxtLink
              v-else
              to="/Home"
              class="hover-line text-sm font-semibold leading-6 text-stone-300 flex justify-center"
              ><img class="w-3/4" src="/images/logo-10.png" alt="Elnik" />
            </NuxtLink>
          </div>
        </div>
        <div class="border-l-2 h-3/4 border-zinc-900 mt-6"></div>

        <div class="flex flex-col justify-center items-center w-1/3">
          <div class="space-y-4 justify-center items-center">
            <div>
              <div class="space-y-4"></div>
              <div class="grid lg:grid-cols-2 md:grid-cols-1">
                <!-- U.S. Contact Block -->
                <div class="lg:space-y-2">
                  <NuxtLink
                    id="contact-button"
                    class="w-full uppercase"
                    style="font-family: ITCFranklinGothicStd-Demi"
                    to="/Contact"
                    ><h6 class="text-center md:text-left">
                      U.S. Contact
                    </h6></NuxtLink
                  >
                  <div class="contact-container">
                    <p class="flex flex-row gap-2 text-size-smaller">
                      <b style="font-family: FranklinGothicBold"> p:</b>
                      +1-973-239-6066
                    </p>
                  </div>
                  <div class="contact-container">
                    <p class="flex flex-row gap-2 text-size-smaller">
                      <b style="font-family: FranklinGothicBold"> f:</b>
                      +1-973-239-3272
                    </p>
                  </div>
                  <div class="contact-container">
                    <a
                      href="mailto:elnik@elnik.com"
                      class="flex flex-row items-center gap-2 text-size-smaller"
                      style="font-family: FranklinGothicBold"
                    >
                      <b style="font-family: FranklinGothicBold"> e:</b>
                      elnik@elnik.com
                    </a>
                  </div>
                </div>

                <!-- German Contact Block -->
                <div class="lg:space-y-2">
                  <NuxtLink
                    id="contact-button"
                    class="lg:w-full md:w-1/2 sm:w-1/4 uppercase flex justify-center md:justify-start"
                    style="font-family: ITCFranklinGothicStd-Demi"
                    to="/Contact"
                    ><h6 class="german-header-width">
                      German Contact
                    </h6></NuxtLink
                  >
                  <div class="contact-container">
                    <p class="flex flex-row gap-2 text-size-smaller">
                      <b style="font-family: FranklinGothicBold"> p:</b>
                      +49 (0) 74585119990
                    </p>
                  </div>
                  <div class="contact-container">
                    <p class="flex flex-row gap-2 text-size-smaller">
                      <b
                        class="flex flex-row items-center"
                        style="font-family: FranklinGothicBold"
                      >
                        e:</b
                      >
                      <a
                        class="flex flex-row items-center mt-1"
                        href="mailto:elnikgmbh@elnik.com"
                        >elnikgmbh@elnik.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="social"
      class="w-full flex flex-row justify-between pr-4 pl-4 mt-4"
    >
      <div class="">
        <p class="text-gray-600 uppercase">
          © 2024 ELNIK SYSTEMS | managed by bomb marketing llc.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"
          />
          <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor" />
          <path
            fill="currentColor"
            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217m-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #0a0a0a;
  color: #fafaf9;
}

@media only screen and (max-width: 480px) {
  .contact-container {
    width: 100%;
    padding-left: 10px;
  }
  .text-size-smaller {
    font-size: 14px;
  }
  .german-header-width {
    width: 75px;
  }
}
</style>
