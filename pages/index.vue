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

          <img :src="slide.image" :alt="slide.title" />
          <div class="caption tracking-normal w-1/2 content-center h-full">
            <!--            :class="-->
            <!--            index % 2 === 1 || index === 0-->
            <!--            ? 'text-stone-300'-->
            <!--            : 'text-neutral-950'-->
            <!--            "-->
            <div class="space-y-2 slide-up">
              <h1 class="text-5xl text-slate-50 font-bold text-shadow-xl">
                {{ slide.title }}
              </h1>
              <h4 class="text-shadow-xl text-slate-50" v-html="slide.description">
              </h4>
              <NuxtLink :to="slide.redirect">
                <button class="mt-4 btn">LEARN MORE</button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <button @click="nextSlide" class="z-10 flex flex-wrap	content-center absolute left-[96%] top-[45%]">
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
            We manufacture the most advanced MIM/AM Debind + Sinter Furnaces and
            1st Stage Debind Ovens in the world. Our expertise is working with
            premium metals, alloys and compsites, translating into a wide range
            of top-notch solutions.
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
        <div class="grid grid-cols-2 gap-12 mt-12">
          <div class="flex flex-col">
            <NuxtLink to="/About" class="w-full" target="_blank">
              <img
                src="/images/elnik_leadership.jpg"
                alt="Elnik Systems Conference"
                class="w-full lg:h-[380.22px] md:h-auto sm:h-full"
              />
            </NuxtLink>

            <p class="text-lg font-bold mt-4">
              A FAMILY OWNED BUSINESS, LEADING THE INDUSTRY WITH OVER 55 YEARS
              OF EXPERIENCE
            </p>
          </div>
          <div class="flex flex-col">
            <NuxtLink to="https://dshtech.com/" class="w-full" target="_blank">
              <img
                src="/images/elnik_development_furnace.jpg"
                alt="Elnik Systems At Work"
                class="w-full about-pic lg:h-[380.22px] md:h-[268.81px] sm:h-[180.05px]"
              />
            </NuxtLink>
            <p class="text-lg font-bold mt-4">
              HASSLE FREE SERVICE AND MAINTENANCE NO MATTER THE PRODUCT, NO
              MATTER THE LOCATION
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref="products" id="products" class="bg-slate-200">
      <div class="h-12 flex justify-center items-center content-center mt-4">
        <h2
          class="text-5xl font-bold text-slate-50 text-shadow-xl"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          PRODUCTS IN DEMAND
        </h2>
      </div>
      <div class="flex flex-col justify-between items-center">
        <!--        <button @click="prev"><svg class="bg-zinc-950 rounded-xl ml-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z"/></svg></button>-->
        <div class="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 w-auto mb-4">
          <div
            v-for="(product, index) in productImages"
            :key="index"
            class="flex flex-col w-full justify-center items-center backdrop-blur shadow-md mb-4"
          >
            <img
              :src="product['img']"
              style="width: 300px"
              :alt="product['name']"
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
        <!--        <button @click="next"><svg class="bg-zinc-950 rounded-xl mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"/></svg></button>-->
      </div>
    </div>
    <div ref="blogSlider" id="blog" class="p-4">
      <div class="h-12 flex justify-center items-center content-center">
        <h2
          class="text-5xl font-semibold text-slate-950"
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
        <div class="grid grid-cols-3 grid-rows-1 gap-x-12 w-3/4">
          <div
            v-for="(post, index) in paginatedColumns"
            :key="index"
            class="flex flex-col w-full justify-center items-center bg-gray-200 p-4 mb-4"
          >
            <img :src="post.image" style="width: 125px" :alt="post.title" />
            <div class="flex flex-col justify-items-start mt-4">
              <h6
                class="text-lg font-bold text-slate-950 uppercase flex"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ post.title }}
              </h6>
              <p class="min-h-8 max-w-60 text-sm text-slate-950">
                {{ post.description }}
              </p>
              <p class="text-gray-500 text-sm mb-4">
                Written by {{ post.author }} on
                {{ new Date(post.date).toLocaleDateString() }}
              </p>
            </div>
            <button @click="goToBlog(index)">
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
    </div>
    <div id="contact">
      <ContactUs />
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent :hero/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import GeneralLayout from "../layout/GeneralLayout.vue";
import type { ReturnType } from "birpc";
import ContactUs from "../components/ContactUs.vue";
import { useProductStore } from "../stores/ProductStore";
import type { Products } from "../types";

import type { BlogPost } from "../types";
import { testBlogData } from "../objects/testObjects";

const posts = ref<BlogPost[]>(testBlogData);

const { getProducts } = useProductStore();
const productList = await getProducts();

const hero = ref<HTMLElement | null | undefined>(
  document.getElementById("hero"),
);
const about = ref<HTMLElement | null | undefined>(
  document.getElementById("about"),
);
const products = ref<HTMLElement | null | undefined>(
  document.getElementById("products"),
);
const blogSlider = ref<HTMLElement | null | undefined>(null);

const slides = ref([
  {
    title: "INNOVATION. QUALITY. EXPERIENCE. EXCELLENCE.",
    description: "LEADING THROUGH ACTION <br> AND SELFLESS SERVICE",
    image: "/images/elnik_systems.jpeg",
    redirect: "/Contact",
  },
  {
    title: "SPEARHEADING INNOVATION & ADVANCEMENT.",
    description: "FOR THE FUTURE OF TOMORROW",
    image: "/images/1668507240009.jpeg",
    redirect: "/blog/",
  },
  {
    title: "PUTTING MINDS & IDEAS TOGETHER.",
    description: "TO CREATE INDUSTRY LEADING SOLUTIONS.",
    image: "/images/Main-Picture-toward-top-min.jpg",
    redirect: "/About",
  },
  {
    title: "HAND CRAFTED EXCELLENCE. AMERICAN MADE.",
    description: "HAND BUILT PRODUCTS, <br> CUSTOMIZED TO YOUR NEEDS",
    image: "/images/2020-10-02-AZOTH-14259-1200x800-min-1024x683.jpg",
    redirect: "/ProductPage",
  },
]);

const productImages = ref<Products[] | undefined>();
productImages.value = productList?.message;
const currentSlideIndex = ref(0);
const currentSlide = ref(0);
const currentIndex = ref(0);
const currentPage = ref(0);
const itemsPerPage = ref(3);
const slidesPerPage = ref(1);
const paginatedColumns = computed(() => {
  const start = currentPage.value * itemsPerPage.value;

  return posts.value?.slice(start, start + itemsPerPage.value);
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
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  resetSlideShow();
};


function next() {
  if (
    productImages.value &&
    (currentPage.value + 1) * itemsPerPage.value < productImages.value?.length
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
    if (productImages && productImages.value?.length)
      currentPage.value =
        Math.ceil(productImages.value?.length / itemsPerPage.value) - 1;
  }
}

const goToProduct = async (index: number) => {
  if (productImages.value && productImages.value[index]) {
    await navigateTo({ path: `/products/${productImages.value[index].id}` });
  }
};

const goToBlog = async (index: number) => {
  await navigateTo({ path: `/blog/` });
};

onMounted(() => {
  startSlideShow();
  blogSlider.value = document.getElementById("blog");
});

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
  height: 550px;
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

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#products {
  background-image: url("/images/furnace_close_up.png");
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font:
    16px / 1.5 Montserrat,
    Verdana,
    Arial,
    sans-serif;
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
  width: 25%;
  margin-left: 25px;
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
}

@media screen and (min-width: 800px) and (max-width: 1023px) {
  .about-pic {
    height: 311.58px;
  }
}
</style>
