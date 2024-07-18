<script setup lang="ts">

import { ref } from "vue";
import type { Products } from "../types";
import { useProductStore } from "../stores/ProductStore";
import GeneralLayout from "../layout/GeneralLayout.vue";
const { getProducts } = useProductStore();
const productList = await getProducts();

const productImages = ref<Products[] | undefined>();
productImages.value = productList?.message;
const goToProduct = async (index: number) => {
  if (productImages.value && productImages.value[index]) {
    await navigateTo({ path: `/products/${productImages.value[index].id}` });
  }
};
</script>

<template>

  <div class="flex flex-col">
    <div class="flex-shrink-0">
      <GeneralLayout
      />
    </div>
    <div class=" w-full h-[500px] lg:flex lg:flex-row md:flex-col sm:block justify-center items-center hero-brochures">
      <div class="flex flex-col lg:justify-center md:items-center sm:items-center lg:w-1/2 text-slate-50 backdrop-blur-lg  space-y-6">
        <h1 class="text-5xl text-shadow-lg font-bold mt-10" style="font-family: ITCFranklinGothicStd-Demi">BROCHURES</h1>
        <h5 class="text-2xl lg:w-3/4 md:w-1/2 sm:w-3/4 md:text-center sm:text-center text-shadow-lg">
          A combination of Innovation, Integrity and Quality combine to provide you with the best Debind and Sinter processing equipment available in the marketplace today.
        </h5>
        <h6 style="font-family: ITCFranklinGothicStd-Demi" class="text-xl text-shadow-lg decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text" >
          Innovation. Quality. Experience. Excellence.
        </h6>
        <div class="flex justify-center">
          <NuxtLink to="/ProductPage">
            <button class="pb-10">
              <p
                class="border-b-slate-50 border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >products</p>
            </button>
          </NuxtLink>

        </div>


      </div>
    </div>
    <div class="flex flex-col justify-between items-center">
      <div>
        <div class="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 mb-4">
          <div
            v-for="(product, index) in productImages"
            :key="index"
            class="flex flex-col w-full justify-center items-center p-4 mb-4"
          >
            <a
              :href="product.brochure"
              target="_blank"
              :alt="product.name"
              class="rounded-lg flex justify-center items-center flex-col"
            > <img :src="product.brochureImage" :alt="product.name" width="100">
              <div class="flex flex-col justify-items-start mt-4">
                <h6 class="text-lg font-bold uppercase"  style="font-family: ITCFranklinGothicStd-Demi">{{ product.name }}</h6>
                <p class="min-h-20 max-w-60 text-sm text-gray-600">
                  {{ product["shortDescription"] }}...
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>

</template>

<style scoped>
.hero-brochures {
  background-image: url("/public/images/elnik_brochures_hero.png");
  background-size: cover;
}
</style>