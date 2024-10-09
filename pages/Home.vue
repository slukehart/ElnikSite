<template>
  <div class="bg-color-div flex flex-col">
    <div class="">
      <GeneralLayout
        :about="about"
        :hero="hero"
        :products="products"
        :blogSlider="blogSlider"
      />
    </div>
    <div ref="hero" id="hero">
      <div class="hero-slider flex flex-row h-screen">
        <button @click="prevSlide" class="z-10 absolute left-0 top-[45%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 4l-8 8l8 8"
            />
          </svg>
        </button>
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <img class="hero-home-img" :src="slide.image" :alt="slide.title" />
          <div class="caption tracking-normal w-1/2 content-center h-full">
            <!--            :class="-->
            <!--            index % 2 === 1 || index === 0-->
            <!--            ? 'text-stone-300'-->
            <!--            : 'text-neutral-950'-->
            <!--            "-->
            <div class="max-sm:w-1/2 space-y-2 slide-up">
              <h1
                class="text-5xl max-sm:text-4xl text-gray-300 font-bold text-shadow-xl"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ slide.title }}
              </h1>
              <h4
                class="text-shadow-xl text-gray-300 text-lg"
                v-html="slide.description"
              ></h4>
              <NuxtLink :to="slide.redirect">
                <button class="mt-4 btn border-grey-300">
                  <p class="text-gray-300">LEARN MORE</p>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <button
          @click="nextSlide"
          class="z-10 flex flex-wrap content-center absolute lg:left-[96%] md:left-[94%] sm:left-[92%] max-sm:left-[92%] top-[45%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 4l8 8l-8 8"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      ref="about"
      id="about"
      class="w-auto h-full items-center flex justify-center p-10"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col w-full items-center">
          <h2
            class="font-bold text-4xl w-full text-center"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            GLOBAL LEADERS IN DEBIND & SINTER EQUIPMENT.
          </h2>
          <p class="text-center w-3/4">
            We manufacture the most advanced MIM/AM Debind &amp; Sinter furnaces
            and 1 st stage debind ovens in the world. Our expertise reaches many
            industries includes Aerospace, Defense, Medical, Fashion/Lifestyle,
            Industrial and more, working with a large array of low and high
            temperature alloys. We are more than just a furnace company.
          </p>
          <NuxtLink to="About">
            <button class="mt-4">
              <p
                class="border-b-black border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                about us
              </p>
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col space-y-12 mt-12 items-center">
          <div class="flex flex-row justify-center space-x-7 w-full">
            <NuxtLink to="/About" class="w-full lg:w-1/2" target="_blank">
              <img
                src="/images/elnik_leadership.jpg"
                alt="Elnik Systems Conference"
                class="w-full lg:h-[25rem] md:h-[15rem] sm:h-[11rem]"
              />
            </NuxtLink>
            <NuxtLink
              to="https://dshtech.com/"
              class="w-full lg:w-1/2"
              target="_blank"
            >
              <img
                src="/images/elnik_debind_furnace.png"
                alt="Elnik Systems At Work"
                class="w-full lg:h-[25rem] md:h-[15rem] sm:h-[11rem]"
              />
            </NuxtLink>
          </div>
          <div
            class="w-full flex flex-col lg:flex-row justify-between lg:space-x-7 items-start text-center lg:text-left"
          >
            <p class="w-full text-md font-bold mt-4 text-center">
              A FAMILY OWNED BUSINESS, LEADING THE INDUSTRY WITH OVER 55 YEARS
              OF EXPERIENCE
            </p>
            <p class="w-full text-md font-bold mt-4 text-center">
              HASSLE FREE SERVICE AND MAINTENANCE NO MATTER THE PRODUCT, NO
              MATTER THE LOCATION
            </p>
          </div>
          <div
            class="flex flex-col lg:flex-row w-full justify-center lg:space-x-7 mt-8"
          >
            <div class="flex justify-center items-center w-full lg:w-1/2">
              <a
                class="w-full flex justify-center"
                href="https://firebasestorage.googleapis.com/v0/b/elnik-72224.appspot.com/o/elnik_core_values.pdf?alt=media&token=25d43c5c-5cd6-4281-85c6-c4dc5f856c91"
                target="_blank"
              >
                <button
                  class="w-1/2 text-sm font-bold py-2 px-6 mb-6 border border-black"
                >
                  <p
                    class="uppercase text-center text-black"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    Core Values
                  </p>
                </button></a
              >
            </div>
            <div class="flex justify-center items-center w-full lg:w-1/2">
              <a
                class="w-full flex justify-center"
                href="https://firebasestorage.googleapis.com/v0/b/elnik-72224.appspot.com/o/elnik_mission.pdf?alt=media&token=fe6c52cc-c644-4980-ad4e-b45c7027d681"
                target="_blank"
              >
                <button
                  class="w-1/2 text-sm font-bold py-2 px-6 mb-6 border border-black"
                >
                  <p
                    class="uppercase text-center text-black"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    Our Mission
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="products" id="products" class="bg-slate-200">
      <div
        class="h-12 flex justify-center items-center content-center mt-4 mb-4"
      >
        <h2
          class="text-5xl max-sm:text-3xl font-semibold text-slate-50"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          PRODUCTS IN DEMAND
        </h2>
      </div>
      <div class="flex flex-row justify-around items-center">
        <button @click="prevProduct">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 4l-8 8l8 8"
            />
          </svg>
        </button>
        <div class="grid lg:grid-cols-3 gap-x-12 w-3/4">
          <div
            v-for="(product, index) in paginatedProducts"
            :key="index"
            class="flex flex-col w-full justify-center items-center backdrop-blur shadow-md"
          >
            <img
              :src="product['img']"
              style="width: 300px"
              :alt="product.name"
            />
            <div class="flex flex-col justify-items-start">
              <h6
                class="text-lg font-bold text-slate-50 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ product["name"] }}
              </h6>
              <p class="max-w-60 text-sm text-slate-50">
                {{ product["shortDescription"] }}...
              </p>
            </div>
            <button
              class="h-auto mt-4 btn-product-main w-3/4 text-sm text-white font-bold py-2 px-6 mb-6"
              @click="goToProduct(index)"
            >
              <p
                class="uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                view product
              </p>
            </button>
          </div>
        </div>
        <button @click="nextProduct">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 4l8 8l-8 8"
            />
          </svg>
        </button>
      </div>
      <div class="flex justify-center items-center w-full mt-8">
        <div class="flex justify-center items-center w-1/4">
          <NuxtLink
            class="h-auto mt-4 btn-product-main w-3/4 text-sm text-white font-bold py-2 px-6 mb-6 backdrop-blur-2xl"
            to="/ProductPage"
          >
            <p
              class="uppercase text-center"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              view all products
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div ref="blogSlider" id="blog" class="p-4">
      <div class="h-12 flex justify-center items-center content-center">
        <h2
          class="text-5xl max-sm:text-3xl font-semibold text-slate-900"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          OUR LATEST NEWS
        </h2>
      </div>
      <div class="flex flex-row justify-around items-center">
        <button @click="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 4l-8 8l8 8"
            />
          </svg>
        </button>
        <div class="grid lg:grid-cols-3 grid-rows-1 gap-x-12 w-3/4">
          <div
            v-for="post in paginatedColumns"
            :key="post.id"
            class="flex flex-col w-full justify-center items-center bg-gray-200 p-4 mb-4"
          >
            <img src="" style="width: 125px" :alt="post.title" />
            <div class="flex flex-col justify-items-start mt-4">
              <h6
                class="text-lg font-bold text-slate-950 uppercase flex"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ post.title }}
              </h6>
              <p class="min-h-8 max-w-60 text-sm text-slate-950">
                {{ post.subject }}
              </p>
              <p class="text-gray-500 text-sm mb-4">
                Written by {{ post.author }} on
                {{ new Date(post.date).toLocaleDateString() }}
              </p>
            </div>
            <button @click="goToBlog(post)">
              <p
                class="border-b-black border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                learn more
              </p>
            </button>
          </div>
        </div>
        <button @click="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 4l8 8l-8 8"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full flex flex-col md:flex-row justify-center items-center mt-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-7 text-center w-full md:w-3/4"
        >
          <div class="flex justify-center items-center w-full">
            <NuxtLink
              class="w-full flex justify-center items-center cursor-pointer md:w-[175px]"
            >
              <p
                class="uppercase"
                style="
                  font-family: ITCFranklinGothicStd-Demi;
                  text-decoration: underline;
                "
              >
                Why Manufacturing is cool
              </p>
            </NuxtLink>
          </div>

          <div class="hidden md:flex justify-center items-center">
            <div class="border-l-2 h-full border-zinc-900"></div>
          </div>

          <NuxtLink
            class="w-full flex justify-center items-center cursor-pointer"
          >
            <p
              class="uppercase"
              style="
                font-family: ITCFranklinGothicStd-Demi;
                text-decoration: underline;
              "
            >
              All about Elnik
            </p>
          </NuxtLink>

          <div class="hidden md:flex justify-center items-center">
            <div class="border-l-2 h-full border-zinc-900"></div>
          </div>

          <NuxtLink
            class="w-full flex justify-center items-center cursor-pointer"
          >
            <p
              class="uppercase"
              style="
                font-family: ITCFranklinGothicStd-Demi;
                text-decoration: underline;
              "
            >
              Education and Innovation
            </p>
          </NuxtLink>

          <div class="hidden md:flex justify-center items-center">
            <div class="border-l-2 h-full border-zinc-900"></div>
          </div>

          <NuxtLink
            class="w-full flex justify-center items-center cursor-pointer"
          >
            <p
              class="uppercase"
              style="
                font-family: ITCFranklinGothicStd-Demi;
                text-decoration: underline;
              "
            >
              View All
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div id="contact">
      <ContactUs />
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent :hero />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import GeneralLayout from "../layout/GeneralLayout.vue";
import type { ReturnType } from "birpc";
import ContactUs from "../components/ContactUs.vue";
import { useProductStore } from "../stores/ProductStore";
import { useLinkedInPostStore } from "../stores/LinkedInPostStore";
import type {
  GetProducts,
  LinkedInPost,
  LinkedInPostResults,
  Products,
} from "../types";
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

import type { BlogPost } from "../types";
import { testBlogData } from "../objects/testObjects";

const posts = ref<BlogPost[]>(testBlogData);

const { getProducts } = useProductStore();
const { getLinkedInPosts } = useLinkedInPostStore();

const hero = ref<HTMLElement | null | undefined>(null);
const about = ref<HTMLElement | null | undefined>(null);
const products = ref<HTMLElement | null | undefined>(null);
const blogSlider = ref<HTMLElement | null | undefined>(null);
const heroProducts = ref<Products[] | undefined>(undefined);
const heroPosts = ref<LinkedInPost[] | undefined>(undefined);
const productImages = ref<Products[] | undefined>();

onMounted(async () => {
  startSlideShow();
  hero.value = document.getElementById("hero");
  about.value = document.getElementById("about");
  products.value = document.getElementById("products");
  blogSlider.value = document.getElementById("blog");
  const productResult = await getProducts();
  heroProducts.value = productResult?.message;

  const result = await getLinkedInPosts();

  heroPosts.value = result?.message as LinkedInPost[];
});

const slides = ref([
  {
    title: "QUALITY FIRST. INNOVATION. EXCELLENCE.",
    description: "",
    image: "/images/sintering_elnik_black_white.png",
    redirect: "/Contact",
  },
  {
    title: "SPEARHEADING INNOVATION & ADVANCEMENT.",
    description: "FOR THE FUTURE OF TOMORROW",
    image: "/images/elnik_photography_1.png",
  },
  {
    title: "PUTTING MINDS & IDEAS TOGETHER.",
    description: "TO CREATE INDUSTRY LEADING SOLUTIONS.",
    image: "/images/elnik_team_america_black_white.png",
    redirect: "/About",
  },
  {
    title: "HAND CRAFTED EXCELLENCE. AMERICAN MADE.",
    description: "HAND BUILT PRODUCTS, <br> CUSTOMIZED TO YOUR NEEDS",
    image: "/images/elnik_america_factory.png",
    redirect: "/ProductPage",
  },
]);

const currentIndex = ref(0);
const currentPage = ref(0);
const itemsPerPage = ref(3);
const currentProductIndex = ref(0);
const currentProductPage = ref(0);
const itemsProductsPerPage = ref(3);

let countBlog = 0;
const paginatedColumns = computed(() => {
  const start = currentPage.value * itemsPerPage.value;

  if (width.value < 640) {
    countBlog++;
    if (heroPosts.value && heroPosts.value.length === countBlog) {
      countBlog = 0;
    }
    return heroPosts.value ? [heroPosts.value[countBlog]] : [];
  }

  return heroPosts.value?.slice(start, start + itemsPerPage.value);
});

let count = 0;

const paginatedProducts = computed(() => {
  const start = currentProductPage.value * itemsProductsPerPage.value;

  if (width.value < 640) {
    count++;
    if (heroProducts.value && heroProducts.value.length === count) {
      count = 0;
    }
    return heroProducts.value ? [heroProducts.value[count]] : [];
  }

  return heroProducts.value?.slice(start, start + itemsProductsPerPage.value);
});

let intervalId: ReturnType<typeof setInterval> | null = null;

const startSlideShow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 5500); // Change slide every 5.5 seconds
};

const stopSlideShow = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const resetSlideShow = () => {
  stopSlideShow();
  startSlideShow();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  resetSlideShow();
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  resetSlideShow();
};

function next() {
  console.log("click");
  if (
    heroPosts.value &&
    (currentPage.value + 1) * itemsPerPage.value < heroPosts.value?.length
  ) {
    currentPage.value++;
  } else {
    currentPage.value = 0;
  }
}

function prev() {
  if (currentPage.value > 0) {
    currentPage.value--;
  } else {
    if (heroPosts && heroPosts.value?.length)
      currentPage.value =
        Math.ceil(heroPosts.value?.length / itemsPerPage.value) - 1;
  }
}

function nextProduct() {
  if (
    heroProducts.value &&
    (currentProductPage.value + 1) * itemsProductsPerPage.value <
      heroProducts.value?.length
  ) {
    currentProductPage.value++;
  } else {
    currentProductPage.value = 0;
  }
}

function prevProduct() {
  if (currentProductPage.value > 0) {
    currentProductPage.value--;
  } else {
    if (heroProducts && heroProducts.value?.length)
      currentProductPage.value =
        Math.ceil(heroProducts.value?.length / itemsProductsPerPage.value) - 1;
  }
}

const goToProduct = async (index: number) => {
  if (heroProducts.value && heroProducts.value[index]) {
    await navigateTo({ path: `/products/${heroProducts.value[index].id}` });
  }
};

const goToBlog = async (post: LinkedInPost) => {
  await navigateTo({ path: `blog/${post.id}` });
};

onUnmounted(() => {
  stopSlideShow();
});
</script>

<style scoped>
.first-neg-margin > :nth-child(2) {
  margin-top: 0; /* Adjust the value to match the space-y value */
}

.bg-color-div > :nth-child(odd) {
  background-color: #d1d5db;
}

.hero-slider {
  width: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 2s ease-in-out;
}

.slide.active {
  left: 0;
  opacity: 1;
}

.hero-home-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#products {
  background-image: url("/images/ELNIK_FURNACE_BACKGROUND.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100%;
}

.caption {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition:
    all 1.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.slide.active .caption {
  animation: fade-in 1.5s ease forwards;
  animation-delay: 0.5s; /* Delay the caption animation */
}

.slide:nth-child(odd) .caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin-left: 25px;
  width: 480px;
}

.slide:nth-child(even) .caption {
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-align: right;
  width: 480px;
  margin-right: 25px;
}

.hero-slider {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

.slide {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 1s ease-in-out;
}

.slide.active {
  left: 0;
  opacity: 1;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  color: #f8fafc;
  border: solid white 1px;
}

/*.btn:hover {
 background-color: #2d7ad7;
}

 */

.btn-product-main {
  padding: 0.5rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  border: solid #f2f2f2 1px;
  color: #f2f2f2;
}

/*
.btn-product-main:hover {
  background-color: #2d7ad7;
}

 */

.p-editor .p-inputtext {
  --p-inputtext-focus-border-color: none;
  box-shadow: none;
}

.p-inputtext:focus {
  --p-inputtext-focus-border-color: none;
  box-shadow: none;
  border: none;
}

#contact {
  background-image: url("public/images/contact_background.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100%;
}

@media (max-width: 640px) {
  .slide:nth-child(even) .caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin-left: 25px;
    width: 480px;
    text-align: left;
  }

  #products {
    background-size: cover;
  }

  #contact {
    object-fit: cover;

    background-size: contain; /* Adjust if needed on very small screens */
    padding: 20px; /* Add some padding if the content is squeezed */
  }
}

@media screen and (min-width: 800px) and (max-width: 1023px) {
  .about-pic {
    height: 311.58px;
  }
}
</style>
