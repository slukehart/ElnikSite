<template>
  <header class="h-auto">
    <div class="flex items-center justify-between w-full" aria-label="Global">
      <!-- Left Column: Logo Image -->
      <div class="flex justify-start items-center w-full lg:w-1/3 lg:ml-8">
        <NuxtLink to="/Home" class="p-1.5">
          <img
            class="h-12 sm:h-16 lg:h-20 w-full sm:max-w-[300px] object-contain"
            src="/images/ELNIK_SHADOW_LOGO_1_Edit.png"
            alt="Elnik"
          />
        </NuxtLink>
      </div>

      <!-- Center Column: Navbar Items -->
      <div class="flex flex-col items-center justify-center w-full">
        <PopoverGroup class="hidden lg:flex lg:gap-x-5">
          <NuxtLink
            to="/Home"
            class="hover-line text-sm font-semibold leading-6 text-stone-300"
          >
            <p class="hover:font-bold text-shadow-xl">HOME</p>
          </NuxtLink>

          <a
            v-if="useRoute().path === '/Home'"
            href="#"
            @click.prevent="scrollToSection(props.about)"
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
            >ABOUT</a
          >
          <NuxtLink
            v-else
            to="/About"
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
          >
            ABOUT
          </NuxtLink>

          <div class="relative" @mouseover="showCard = true">
            <a
              href="#"
              @click.prevent="scrollToSection(props.products)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300 relative z-10 text-shadow-xl"
            >
              PRODUCTS
            </a>
            <div
              v-if="showCard"
              @mouseleave="showCard = false"
              class="absolute top-full left-0 w-auto bg-white shadow-lg overflow-hidden z-10 text-shadow-md"
            >
              <!-- Card content -->
              <div
                class="p-6 flex flex-row space-x-4 items-center justify-center"
              >
                <NuxtLink to="/ProductPage" class="cursor-pointer">
                  <div class="flex flex-row items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fill="text-gray-800"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.23 2.25l.43-1.11A1 1 0 0 1 6.59.5h.82a1 1 0 0 1 .93.64l.43 1.11l1.46.84l1.18-.18a1 1 0 0 1 1 .49l.4.7a1 1 0 0 1-.08 1.13l-.73.93v1.68l.75.93a1 1 0 0 1 .08 1.13l-.4.7a1 1 0 0 1-1 .49l-1.18-.18l-1.46.84l-.43 1.11a1 1 0 0 1-.93.64h-.84a1 1 0 0 1-.93-.64l-.43-1.11l-1.46-.84l-1.18.18a1 1 0 0 1-1-.49l-.4-.7a1 1 0 0 1 .08-1.13L2 7.84V6.16l-.75-.93a1 1 0 0 1-.08-1.13l.4-.7a1 1 0 0 1 1-.49l1.18.18ZM5 7a2 2 0 1 0 2-2a2 2 0 0 0-2 2Z"
                      />
                    </svg>
                    <h3 class="text-md font-semibold text-gray-800">
                      PRODUCTS
                    </h3>
                  </div>
                </NuxtLink>
                <div class="border-t-2 h-full border-slate-950"></div>
                <NuxtLink
                  to="/Brochures"
                  class="cursor-pointer hover:text-stone-300"
                >
                  <div class="flex flex-row items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="text-gray-800"
                        d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
                      />
                    </svg>
                    <h3 class="text-md font-semibold text-gray-800">
                      BROCHURES
                    </h3>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/Careers"
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
          >
            CAREERS
          </NuxtLink>

          <a
            v-if="useRoute().path === '/Home'"
            href="#"
            @click.prevent="scrollToSection(props?.blogSlider)"
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
            >BLOG</a
          >
          <NuxtLink
            v-else-if="postsForNav"
            :to="
              route.params.id
                ? `/blog/${route.params.id}`
                : `/blog/${postsForNav[0].id}`
            "
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
            >BLOG
          </NuxtLink>

          <NuxtLink
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
            to="/Contact"
          >
            CONTACT
          </NuxtLink>
          <a
            href="https://dshtech.com/"
            class="hover-line text-sm font-semibold leading-6 text-stone-300 text-shadow-xl"
          >
            DSH TECHNOLOGIES
          </a>
        </PopoverGroup>
      </div>

      <!-- Right Column: Made in America Image and Logo -->
      <div class="flex justify-end items-center w-full lg:w-1/3 lg:mr-8">
        <div class="h-full flex items-end m-0">
          <img
            class="w-24 sm:w-36 lg:w-[100px] object-contain"
            src="/images/logos/elnik_made_in_usa_logo.png"
            alt="Elnik"
          />
        </div>

        <NuxtLink to="/Auth" class="flex items-end">
          <svg
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#D6D3D1"
              d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 2A1.5 1.5 0 0 0 10 8.5A1.5 1.5 0 0 0 11.5 10A1.5 1.5 0 0 0 13 8.5A1.5 1.5 0 0 0 11.5 7Z"
            />
          </svg>
        </NuxtLink>
      </div>
      <button v-show="width < 1024" class="mr-4" @click="mobileMenuOpen = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fffafa"
            d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"
          />
        </svg>
      </button>
    </div>

    <Dialog @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-lg"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="mb-2 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-20 w-auto"
              src="/images/ELNIK_SHADOW_LOGO_1_Edit.png"
              alt="Elnik"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 px-6">
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/Home" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">HOME</p></NuxtLink
                >
              </a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/About" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">about</p></NuxtLink
                >
              </a>

              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/ProductPage" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">Products</p></NuxtLink
                >
              </a>

              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/Brochures" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">BROCHURES</p></NuxtLink
                >
              </a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/Careers" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">CAREERS</p></NuxtLink
                >
              </a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink
                  v-if="postsForNav"
                  :to="`/blog/${postsForNav[0].id}`"
                  @click="mobileMenuOpen = false"
                >
                  <p class="text-stone-900 uppercase">BLOG</p></NuxtLink
                >
              </a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <NuxtLink to="/Contact" @click="mobileMenuOpen = false">
                  <p class="text-stone-900 uppercase">contact</p></NuxtLink
                >
              </a>
              <a
                href="https://dshtech.com/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-900 hover:bg-gray-50"
                >DSH TECHNOLOGIES</a
              >
            </div>
            <div class="py-6 px-6">
              <NuxtLink to="/Auth">
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1c1917"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/vue/20/solid";

import type { PropType } from "vue";
import { useRoute } from "vue-router";
import scrollToTopComposable from "../composables/scrollToTopComposable";

const { scrollToSection } = scrollToTopComposable();
const route = useRoute();
const { width, height } = useWindowSize();

const showCard = ref(false);

const props = defineProps({
  about: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  hero: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  products: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  blogSlider: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
});

const linkedInPosts = useLinkedInPostStore();
const { postsList } = storeToRefs(linkedInPosts);
const postsForNav = ref<any[]>();

onMounted(async () => {
  await linkedInPosts.getLinkedInPosts();
  postsForNav.value = postsList.value;
});

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
header {
  background-color: #0a0a0a;
  color: #fafaf9;
}

/* Basic styling for the text */
/* Basic styling for the text */
.hover-line {
  position: relative;
  display: inline-block;
  color: #d6d3d1; /* Assuming the hex color from earlier */
  text-decoration: none;
}

/* Create the line using the ::after pseudo-element */
.hover-line::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #d6d3d1; /* Change this color as needed */
  transition: width 0.3s ease-in-out;
}

/* On hover, expand the line to the full width of the element */
.hover-line:hover::after {
  width: 100%;
}
</style>
