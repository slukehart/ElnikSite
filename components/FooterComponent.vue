<script setup lang="ts">

import type { PropType } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({

  hero: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
});

import scrollToTopComposable from "../composables/scrollToTopComposable";

const {scrollToSection} = scrollToTopComposable()
</script>

<template>
  <div class="footer h-auto bg-gray-700 w-full">
    <div class="flex flex-row justify-center align-middle">
      <div class="flex lg:flex-row items-center w-full">
        <div class="flex justify-center items-center w-1/3 lg:p-6">
          <nav
            class="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-3 md:gap-2 text-center"
          >
            <NuxtLink><a class="text-sm">HOME</a></NuxtLink>
            <NuxtLink><a class="text-sm">ABOUT</a></NuxtLink>
            <NuxtLink><a class="text-sm">PRODUCTS</a></NuxtLink>
            <NuxtLink><a class="text-sm">APPLICATION</a></NuxtLink>
            <NuxtLink><a class="text-sm">CAREERS</a></NuxtLink>
            <NuxtLink><a class="text-sm">BLOG</a></NuxtLink>
            <NuxtLink><a class="text-sm">DSH TECHNOLOGIES</a></NuxtLink>

            <NuxtLink><a class="text-sm">CONTACT</a></NuxtLink>
            <NuxtLink><a class="text-sm"></a></NuxtLink>

          </nav>
        </div>
        <div class="border-l-2 h-3/4 border-zinc-900 mt-6"></div>
        <div class="flex flex-col justify-between items-center w-1/3">
          <div id="footer-logo" class="flex justify-center px-6 py-4">
            <a
              v-if="useRoute().path === '/'"
              href="#"
              @click.prevent="scrollToSection(props?.hero)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
            > <img class="w-3/4" src="/images/logo-10.png" alt="Elnik" /></a
            >
            <NuxtLink
              v-else
              to="/"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
            > <img class="w-3/4" src="/images/logo-10.png" alt="Elnik" />
            </NuxtLink>
          </div>
        </div>
        <div class="border-l-2 h-3/4 border-zinc-900 mt-6"></div>
        <div class="flex flex-col justify-center items-center w-1/3">
          <div class="space-y-4 justify-center items-center">
            <!--            <button class=" uppercase h-12 w-20 flex justify-center" type="submit">-->
            <!--              <p class="border-b-4 uppercase" style="font-family: ITCFranklinGothicStd-Demi">Submit</p>-->
            <!--            </button>-->
            <button
              id="contact-button"
              class=" w-full uppercase"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              <p class="border-b-2 border-b-black uppercase">Contact Us</p>
            </button>
            <div>
              <div class="space-y-4"></div>

              <div class="space-y-4">
                <p class="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                    />
                  </svg>
                  973.239.6066
                </p>
                <p class="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M128 0C92.7 0 64 28.7 64 64v96h64V64h226.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0zm256 352v96H128v-96zm64 32h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-16-136a24 24 0 1 1 0 48a24 24 0 1 1 0-48"
                    />
                  </svg>
                  973.239.3272
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="social" class="flex flex-row justify-between pr-4 pl-4">
      <div>
        <p class="text-gray-600 uppercase">© 2024 ELNIK SYSTEMS  |  managed by bomb marketing llc.</p>
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
  background-color: #d1d5db;
}
</style>
