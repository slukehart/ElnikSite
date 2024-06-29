<template>
  <div class="bg-color-div flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout
        :about="about"
        :hero="hero"
        :products="products"
        :blogSlider="blogSlider"
      />
    </div>
    <div ref="hero" id="hero" class="flex-grow">
      <div class="hero-slider flex flex-row">
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <img :src="slide.image" :alt="slide.title" />
          <div
            class="z-10 caption tracking-normal pt-48 ml-10 pr-40 mb-20 w-1/3"
          >
            <div class="space-y-8 slide-up">
              <h1 class="text-5xl text-neutral-950">{{ slide.title }}</h1>
              <p
                :class="
                  index % 2 === 1 || index === 0
                    ? 'text-stone-300'
                    : 'text-neutral-950'
                "
              >
                {{ slide.description }}
              </p>
              <button class="mt-4 btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="about"
      id="about"
      class="w-auto h-full items-center flex justify-center p-10"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col w-3/4 items-center space-y-4">
          <h3 class="font-bold text-4xl text-center">
            Global Leaders in Debind & Sinter Equipment.
          </h3>
          <p class="text-center">
            We manufacture the most advanced MIM/AM Debind + Sinter Furnaces and
            1st Stage Debind Ovens in the world. Our expertise is working with
            premium metals, alloys and compsites, translating into a wide range
            of top-notch solutions.
          </p>
          <NuxtLink to="About">
            <button class="h-auto mt-6 btn-product text-sm">About Us</button>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-44 mt-12">
          <div class="flex flex-col">
            <img
              style="width: 300px"
              src="/images/1668507240009.jpeg"
              alt="Elnik Systems Conference"
              class="rounded-xl"
            />
            <p class="text-lg font-bold mt-4">Our solutions are grade a</p>
          </div>
          <div class="flex flex-col">
            <img
              style="width: 300px"
              src="/images/2020-10-02-AZOTH-14259-1200x800-min-1024x683.jpg"
              alt="Elnik Systems At Work"
              class="rounded-xl"
            />
            <p class="text-lg font-bold mt-4">Our solutions are grade a</p>
          </div>
        </div>
      </div>
    </div>
    <div ref="products" id="products" class="bg-slate-200">
      <div
        class="h-12 flex justify-center items-center content-center mb-8 mt-4"
      >
        <h2 class="text-4xl font-semibold text-slate-50">
          OUR FAVORITE PRODUCTS
        </h2>
      </div>
      <div class="flex flex-col justify-between items-center">
        <!--        <button @click="prev"><svg class="bg-zinc-950 rounded-xl ml-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z"/></svg></button>-->
        <div class="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 w-auto mb-4">
          <div
            v-for="(product, index) in productImages"
            :key="index"
            class="flex flex-col w-full justify-center items-center bg-neutral-100 rounded-lg shadow-md p-4 mb-4"
          >
            <img
              :src="product['img']"
              style="width: 125px"
              :alt="product['name']"
              class="rounded-lg"
            />
            <div class="flex flex-col justify-items-start mt-4">
              <h6 class="text-lg font-bold">{{ product["name"] }}</h6>
              <p class="min-h-20 max-w-60 mt-2 text-sm text-gray-600">
                {{ product["shortDescription"] }}
              </p>
            </div>
            <button
              class="h-auto mt-4 btn-product w-3/4 text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              @click="goToProduct(index)"
            >
              Learn More
            </button>
          </div>
        </div>
        <!--        <button @click="next"><svg class="bg-zinc-950 rounded-xl mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"/></svg></button>-->
      </div>
    </div>
    <div ref="blogSlider" id="blog" class="p-10">
      <div class="h-12 flex justify-center items-center content-center mb-8">
        <h2 class="text-4xl font-semibold text-zinc-950">OUR LATEST NEWS</h2>
      </div>
      <div class="flex flex-row justify-around items-center">
        <button @click="prev">
          <svg
            class="bg-zinc-950 rounded-xl ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z"
            />
          </svg>
        </button>
        <div class="grid grid-cols-3 grid-rows-1 gap-x-12 w-3/4">
          <div
            v-for="(post, index) in paginatedColumns"
            :key="index"
            class="flex flex-col w-full justify-center items-center bg-neutral-100 rounded-lg shadow-md p-4 mb-4"
          >
            <img
              :src="post.image"
              style="width: 125px"
              :alt="post.title"
              class="rounded-lg"
            />
            <div class="flex flex-col justify-items-start mt-4">
              <h6 class="text-lg font-bold">{{ post.title }}</h6>
              <p class="min-h-8 max-w-60 mt-2 text-sm text-gray-900">
                {{ post.description }}
              </p>
              <p class="text-gray-500 text-sm mb-4">
                Written by {{ post.author }} on
                {{ new Date(post.date).toLocaleDateString() }}
              </p>
            </div>
            <button
              class="h-auto mt-4 btn-product w-3/4 text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              @click="goToBlog(index)"
            >
              Learn More
            </button>
          </div>
        </div>
        <button @click="next">
          <svg
            class="bg-zinc-950 rounded-xl mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div id="contact">
      <ContactUs />
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent />
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
import { getElementById } from "domutils";

const posts = ref<BlogPost[]>(testBlogData);

const { getProducts } = useProductStore();
const productList = await getProducts();
console.log("producty ", productList);

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
    title: "Stinking bishop manchego cauliflower cheese",
    description: "This is the first slide",
    image: "/images/elnik_systems.jpeg",
  },
  {
    title: "Stinking bishop manchego cauliflower cheese",
    description: "This is the first slide",
    image: "/images/production-line-of-plastic-industry.webp",
  },
  {
    title: "Stinking bishop manchego cauliflower cheese",
    description: "This is the first slide",
    image: "/images/Main-Picture-toward-top-min.jpg",
  },
  {
    title: "Stinking bishop manchego cauliflower cheese",
    description: "This is the first slide",
    image: "/images/farmer-checking-agricultural-machinery-parts.webp",
  },
]);

const productImages = ref<Products[] | undefined>();
productImages.value = productList?.message;

const currentIndex = ref(0);
const currentPage = ref(0);
const itemsPerPage = ref(3);
const paginatedColumns = computed(() => {
  const start = currentPage.value * itemsPerPage.value;

  return posts.value?.slice(start, start + itemsPerPage.value);
});
let intervalId: ReturnType<typeof setInterval> | null = null;

const startSlideShow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 5500); // Change slide every 3 seconds
};

const stopSlideShow = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
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
    console.log(currentPage.value);
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
  background-color: #e2e8f0;
}

.hero-slider {
  width: 100%;
  position: relative;
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
  transition: all 1s ease-in-out;
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
  background-image: url("/images/laser-cutting-close-up.webp");
  object-fit: fill;
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
  animation: fade-in 0.5s ease forwards;
  animation-delay: 0.5s; /* Delay the caption animation */
}

.slide:nth-child(odd) .caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.slide:nth-child(even) .caption {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.slide.active .caption {
  animation:
    slide-up 1.5s ease forwards,
    fade-in 1.5s ease forwards;
  animation-delay: 0.5s; /* Delay the caption animation */
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
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  background-color: #2d7ad7;
  color: #f8fafc;
}

.btn-product {
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  background-color: #2d7ad7;
  color: #f8fafc;
}

.btn:hover {
  background-color: #99a4b9; /* Darker shade for hover */
}

.btn-product:hover {
  background-color: #99a4b9; /* Darker shade for hover */
}

.p-editor .p-inputtext {
  --p-inputtext-focus-border-color: none;
  box-shadow: none;
}

.p-inputtext:focus {
  --p-inputtext-focus-border-color: none;
  box-shadow: none;
  border: none;
}
</style>
