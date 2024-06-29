<template>
  <header class="h-32">
    <nav
      class="mx-auto flex max-w-7xl content-center items-center justify-center p-6 lg:px-6"
      aria-label="Global"
    >
      <div class="flex pb-5 w-full lg:ml-8">
        <div class="flex flex-col content-center flex-wrap w-full">
          <div class="flex lg:flex-1 justify-center">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-12 w-auto" src="/images/logo-10.png" alt="Elnik" />
            </a>
          </div>
          <PopoverGroup class="hidden lg:flex lg:gap-x-5 mt-2.5">
            <!--        <Popover class="relative">-->
            <!--          <PopoverButton-->
            <!--            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-stone-300"-->
            <!--          >-->
            <!--            Product-->
            <!--            <ChevronDownIcon-->
            <!--              class="h-5 w-5 flex-none text-gray-400"-->
            <!--              aria-hidden="true"-->
            <!--            />-->
            <!--          </PopoverButton>-->

            <!--          <transition-->
            <!--            enter-active-class="transition ease-out duration-200"-->
            <!--            enter-from-class="opacity-0 translate-y-1"-->
            <!--            enter-to-class="opacity-100 translate-y-0"-->
            <!--            leave-active-class="transition ease-in duration-150"-->
            <!--            leave-from-class="opacity-100 translate-y-0"-->
            <!--            leave-to-class="opacity-0 translate-y-1"-->
            <!--          >-->
            <!--            <PopoverPanel-->
            <!--              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"-->
            <!--            >-->
            <!--              <div class="p-4">-->
            <!--                <div-->
            <!--                  v-for="item in products"-->
            <!--                  :key="item.name"-->
            <!--                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"-->
            <!--                >-->
            <!--                  <div-->
            <!--                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"-->
            <!--                  >-->
            <!--                    <component-->
            <!--                      :is="item.icon"-->
            <!--                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"-->
            <!--                      aria-hidden="true"-->
            <!--                    />-->
            <!--                  </div>-->
            <!--                  <div class="flex-auto">-->
            <!--                    <a-->
            <!--                      :href="item.href"-->
            <!--                      class="block font-semibold text-gray-900"-->
            <!--                    >-->
            <!--                      {{ item.name }}-->
            <!--                      <span class="absolute inset-0" />-->
            <!--                    </a>-->
            <!--                    <p class="mt-1 text-gray-600">{{ item.description }}</p>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <div-->
            <!--                class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"-->
            <!--              >-->
            <!--                <a-->
            <!--                  v-for="item in callsToAction"-->
            <!--                  :key="item.name"-->
            <!--                  :href="item.href"-->
            <!--                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"-->
            <!--                >-->
            <!--                  <component-->
            <!--                    :is="item.icon"-->
            <!--                    class="h-5 w-5 flex-none text-gray-400"-->
            <!--                    aria-hidden="true"-->
            <!--                  />-->
            <!--                  {{ item.name }}-->
            <!--                </a>-->
            <!--              </div>-->
            <!--            </PopoverPanel>-->
            <!--          </transition>-->
            <!--        </Popover>-->
            <a
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
            >
              <NuxtLink to="/">HOME</NuxtLink>
            </a>

            <a v-if="useRoute().path === '/'"
              href="#"

              @click.prevent="scrollToSection(props.about)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
              >ABOUT</a
            >
            <NuxtLink v-else
                      to="About"
                      class="hover-line text-sm font-semibold leading-6 text-stone-300"
            >ABOUT</NuxtLink
            >
            <a
              href="#"
              @click.prevent="scrollToSection(props.products)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
              >PRODUCTS</a
            >

            <a
              href="#"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
              >APPLICATIONS</a
            >
            <a
              href="#"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
              >CAREERS</a
            >

            <a v-if="useRoute().path === '/'"
              href="#"
              @click.prevent="scrollToSection(props?.blogSlider)"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
            >BLOG</a
            >
            <NuxtLink v-else
              to="blog/"
              class="hover-line text-sm font-semibold leading-6 text-stone-300"
            >BLOG</NuxtLink
            >


              <NuxtLink class="hover-line text-sm font-semibold leading-6 text-stone-300" to="/Contact">CONTACT</NuxtLink>

          </PopoverGroup>
        </div>

        <div class="hidden lg:flex lg:flex-1 justify-end">
          <div class="flex flex-col justify-center items-center">
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#D6D3D1"
                d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
              />
            </svg>
            <a href="#" style="width: 50px" class="flex justify-center text-xs font-semibold leading-6 text-stone-300"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>
      <div class="flex lg:hidden justify-center">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-lg"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="/images/Untitled_design-5.png"
              alt=""
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
            <div class="space-y-2 py-6">
              <!--              <Disclosure as="div" class="-mx-3" v-slot="{ open }">-->
              <!--&lt;!&ndash;                <DisclosureButton&ndash;&gt;-->
              <!--&lt;!&ndash;                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"&ndash;&gt;-->
              <!--&lt;!&ndash;                >&ndash;&gt;-->
              <!--&lt;!&ndash;                  Product&ndash;&gt;-->
              <!--&lt;!&ndash;                  <ChevronDownIcon&ndash;&gt;-->
              <!--&lt;!&ndash;                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"&ndash;&gt;-->
              <!--&lt;!&ndash;                    aria-hidden="true"&ndash;&gt;-->
              <!--&lt;!&ndash;                  />&ndash;&gt;-->
              <!--&lt;!&ndash;                </DisclosureButton>&ndash;&gt;-->
              <!--&lt;!&ndash;                <DisclosurePanel class="mt-2 space-y-2">&ndash;&gt;-->
              <!--&lt;!&ndash;                  <DisclosureButton&ndash;&gt;-->
              <!--&lt;!&ndash;                    v-for="item in [...products, ...callsToAction]"&ndash;&gt;-->
              <!--&lt;!&ndash;                    :key="item.name"&ndash;&gt;-->
              <!--&lt;!&ndash;                    as="a"&ndash;&gt;-->
              <!--&lt;!&ndash;                    :href="item.href"&ndash;&gt;-->
              <!--&lt;!&ndash;                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"&ndash;&gt;-->
              <!--&lt;!&ndash;                  >&ndash;&gt;-->
              <!--&lt;!&ndash;                    {{ item.name }}&ndash;&gt;-->
              <!--&lt;!&ndash;                  </DisclosureButton>&ndash;&gt;-->
              <!--&lt;!&ndash;                </DisclosurePanel>&ndash;&gt;-->
              <!--              </Disclosure>-->
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Products</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6 flex flex-col">
              <svg
                class="ml-1.5"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path
                  fill="text-gray-900"
                  d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
                />
              </svg>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                >Log in <span aria-hidden="true">&rarr;</span></a
              >
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
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

import { useScroll } from "@vueuse/core";
import type { PropType } from "vue";
import {useRoute} from "vue-router";

console.log(useRoute())
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
    type: Object as PropType<HTMLElement  | null | undefined>,
    required: false,
  },
  blogSlider: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  }
});

const scrollToSection = (id: HTMLElement | null | undefined) => {
  console.log(id);
  if (id) {
    id.scrollIntoView({ behavior: "smooth" });
  }
};

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
  background-image: url("public/images/Untitled design-7.png");
  background-size: 100%; /* Ensure the entire background image is visible */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the image within the header */
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
