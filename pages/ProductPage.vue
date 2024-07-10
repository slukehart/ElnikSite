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
  <div class="flex flex-col ">
    <div class="flex-shrink-0">
      <GeneralLayout
      />
    </div>
    <div class=" w-full lg:flex lg:flex-row md:flex-col sm:block justify-between items-center bg-gray-200">
      <div class="flex flex-col lg:justify-start md:items-center sm:items-center lg:w-1/2  space-y-6">
        <h1 class="text-5xl text-shadow-md font-bold" style="font-family: ITCFranklinGothicStd-Demi">PRODUCTS</h1>
        <h5 class="text-2xl lg:w-3/4 md:w-1/2 sm:w-3/4 md:text-center sm:text-center">
          A combination of Innovation, Integrity and Quality combine to provide you with the best Debind and Sinter processing equipment available in the marketplace today.
        </h5>
        <h6 style="font-family: ITCFranklinGothicStd-Demi" class="text-xl text-shadow-md decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text" >
          Innovation. Quality. Experience. Excellence.
        </h6>
        <div class="flex justify-center">
          <NuxtLink to="/Brochures">
            <button class="btn-product mb-4">
              <p
                class="border-b-black border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >Brochures</p>
            </button>
          </NuxtLink>

        </div>


      </div>

      <div id="product-hero-img" class="flex justify-end lg:w-1/2">
        <img
          class="h-full w-full"
          src="public/images/elnik_systems.jpeg"
        />
      </div>
    </div>
  <div class="flex flex-col justify-between items-center ">
    <div class="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 w-auto mb-4">
      <div
        v-for="(product, index) in productImages"
        :key="index"
        class="flex flex-col w-full justify-center items-center p-4 mb-4"
      >
        <img
          :src="product['img']"
          style="width: 250px"
          :alt="product['name']"
          class="rounded-lg"
        />
        <div class="flex flex-col justify-items-start mt-4">
          <h6 class="text-lg font-bold" style="font-family: ITCFranklinGothicStd-Demi">{{ product["name"] }}</h6>
          <p class=" max-w-60 text-sm text-gray-600">
            {{ product["shortDescription"] }}...
          </p>
        </div>
        <button
          class="h-auto mt-4 btn-product w-full text-sm hover:bg-blue-600 text-white font-bold py-2 px-4"
          @click="goToProduct(index)"
        >
          LEARN MORE
        </button>
      </div>
    </div>
    <!--        <button @click="next"><svg class="bg-zinc-950 rounded-xl mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"/></svg></button>-->
  </div>
  <div id="footer" class="flex justify-center">
    <FooterComponent />
  </div>
  </div>
</template>

<style scoped>

</style>