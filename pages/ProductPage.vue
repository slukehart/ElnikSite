<script setup lang="ts">
import { ref } from "vue";
import type { Products } from "../types";
import { useProductStore } from "../stores/ProductStore";

const { getProducts } = useProductStore();

const productList = ref();
const productImages = ref<Products[] | undefined>();
const firstStage = ref<Products[] | undefined>([]);
const thermalDebind = ref<Products[] | undefined>([]);
const customFurnace = ref<Products[] | undefined>([]);
const ancillaryEquipment = ref<Products[] | undefined>([]);

onMounted(async () => {
  const products = await getProducts();
  productImages.value = products?.message;

  firstStage.value = productImages.value?.filter(
    (product) => product.type === "FSD",
  );
  thermalDebind.value = productImages.value?.filter(
    (product) => product.type === "TDS",
  );
  customFurnace.value = productImages.value?.filter(
    (product) => product.type === "CF",
  );
  ancillaryEquipment.value = productImages.value?.filter(
    (product) => product.type === "AE",
  );
});

// Map sections to their titles
const productSections = ref({
  "First Stage Debinding": firstStage,
  "Thermal Debind and Sinter": thermalDebind,
  "Custom Furnace": customFurnace,
  "Ancillary Equipment": ancillaryEquipment,
});

const goToProduct = async (index: number) => {
  if (productImages.value && productImages.value[index]) {
    await navigateTo({ path: `/products/${productImages.value[index].id}` });
  }
};
</script>

<template>
  <div class="flex flex-col" style="background-color: #d9d9d9">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div
      class="w-full h-screen flex lg:flex-row md:flex-col justify-center items-center hero-product"
    >
      <div
        class="flex flex-col lg:justify-center md:items-center sm:items-center lg:w-1/2 text-slate-50 backdrop-blur-lg space-y-6"
      >
        <h1
          class="text-5xl text-shadow-lg font-bold pt-10 text-center"
          style="font-family: Anton-Regular"
        >
          PRODUCTS
        </h1>
        <h5
          class="text-2xl text-shadow-lg lg:w-3/4 md:w-1/2 sm:w-3/4 md:text-center text-center"
        >
          A combination of Innovation, Integrity and Quality combine to provide
          you with the best Debind and Sinter processing equipment available in
          the marketplace today.
        </h5>
        <h6
          style="font-family: ITCFranklinGothicStd-Demi"
          class="text-xl text-shadow-lg decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text text-center"
        >
          Quality First. Innovation. Excellence.
        </h6>
        <div class="flex justify-center">
          <NuxtLink to="/Brochures">
            <button class="pb-10">
              <p
                class="border-b-slate-50 border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                Brochures
              </p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between items-center">
      <!-- Section Loop -->
      <div>
        <div
          v-for="(products, type) in productSections"
          :key="type"
          class="mb-8 col"
        >
          <!-- Section Title -->
          <h2
            class="text-2xl md:text-3xl font-bold uppercase mb-4 text-center"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            {{ type }}
          </h2>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="flex flex-col w-full justify-center items-center p-4 bg-white shadow-md"
            >
              <img
                :src="product.img"
                style="width: 250px; height: 250px"
                :alt="product.name"
                class="rounded-lg cursor-pointer"
                @click="goToProduct(index)"
              />
              <div class="flex flex-col items-start mt-4">
                <h6
                  class="text-lg font-bold uppercase"
                  style="font-family: ITCFranklinGothicStd-Demi"
                >
                  {{ product.name }}
                </h6>
                <p class="text-sm text-gray-600">
                  {{ product.shortDescription }}...
                </p>
              </div>
              <button class="mt-6" @click="goToProduct(index)">
                <p
                  class="border-b-4 border-b-black uppercase"
                  style="font-family: ITCFranklinGothicStd-Demi"
                >
                  Learn More
                </p>
              </button>
            </div>
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
.hero-product {
  background-image: url("/public/images/elnik_product_hero.JPG");
  background-size: cover;
}
</style>
