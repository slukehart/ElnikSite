<script setup lang="ts">
import { useProductStore } from "../../stores/ProductStore";
import { useRoute } from "vue-router";
import GeneralLayout from "../../layout/GeneralLayout.vue";
import type { ProductTableInfo } from "types";

const formatKey = (key: string) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
const routeId = useRoute().params.id;

type ProductMessage = {
  id: string;
  name: string;
  description: string;
  brochure: string;
  img: string;
};

const getProductsFunction = useProductStore();
const { products } = storeToRefs(getProductsFunction);
const productList = ref<{
  status: number;
  message: ProductMessage[] | string;
} | null>(null);
const product = ref<ProductMessage | null>();
const tableInfo = ref<ProductTableInfo | null>(null);

onMounted(async () => {
  if (Object.keys(products.value).length <= 0) {
    const result:
      | { status: number; message: ProductMessage[] | string }
      | undefined = await getProductsFunction.getProducts();
    if (result?.status === 200 && result?.message) {
      productList.value = result;
      if (Array.isArray(productList.value.message))
        product.value = productList.value?.message.find(
          (product: ProductMessage) => product.id === routeId,
        );
    }
  } else {
    product.value = products.value.find((p) => {
      return p.id === useRoute().params.id;
    });
  }
  if (product.value) {
    const uuid = product.value.id;
    const tableResult: { status: number; message: ProductTableInfo } =
      await $fetch(`/api/getProductTableInfo/${uuid}`);
    tableInfo.value = tableResult?.message;
  }
});
</script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>

    <div
      class="flex flex-col lg:flex-row h-auto lg:h-1/2 bg-white items-center justify-center lg:space-x-6 p-4"
    >
      <div class="w-full lg:w-1/2 overflow-hidden">
        <div class="relative pb-2/3">
          <a :href="product?.brochure" target="_blank">
            <img
              class="w-full object-cover"
              :src="product?.img"
              :alt="product?.name"
            />
          </a>
        </div>
      </div>

      <!-- Divider: hidden on small screens -->
      <div
        class="border-l-2 hidden lg:block min-h-screen border-slate-950"
      ></div>

      <div
        class="w-full lg:w-1/2 flex flex-col items-center justify-center mt-4 lg:mt-0"
      >
        <h2
          class="text-2xl text-center lg:text-4xl font-bold text-gray-800 uppercase mb-4"
          style="font-family: Anton-Regular"
        >
          {{ product?.name }}
        </h2>
        <p class="text-xs lg:text-sm text-gray-600 text-center lg:text-left">
          {{ product?.description }}
        </p>

        <!-- Buttons: centered on mobile -->
        <div
          class="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 p-4"
        >
          <a
            v-if="product?.brochure"
            :href="product?.brochure"
            target="_blank"
            class="cursor-pointer"
          >
            <button class="mt-4 lg:mt-10">
              <p class="border-b-black border-b-2 uppercase text-center">
                go to brochure
              </p>
            </button>
          </a>
          <NuxtLink to="/Contact" class="cursor-pointer">
            <button class="mt-4 lg:mt-10">
              <p class="border-b-black border-b-2 uppercase text-center">
                get a quote
              </p>
            </button>
          </NuxtLink>
        </div>

        <!-- DataTable: responsive on smaller screens -->
        <div
          class="w-full flex items-center justify-center p-6 overflow-x-auto"
        >
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th
                  class="px-4 py-2 text-left text-slate-950 font-medium border-b bg-sky-300"
                >
                  <p class="font-extrabold">Attribute</p>
                </th>
                <th
                  class="px-4 py-2 text-left text-slate-950 font-medium border-b border-l"
                >
                  <p class="font-extrabold">Details</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in tableInfo" :key="key" class="border-b">
                <td class="px-4 py-2 font-medium text-gray-700 bg-sky-300">
                  {{ formatKey(key) }}
                </td>
                <td class="px-4 py-2 text-gray-600 border-l">
                  <div v-if="Array.isArray(value)">
                    {{ value.join(", ") }}
                  </div>
                  <div v-else>
                    <p>
                      {{ key === "maxTempature" ? `${value}°C` : value }}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.custom-datatable {
  border-collapse: collapse;
  width: 100%;
}

.custom-datatable th,
.custom-datatable td {
  border: 1px solid #ddd;
  text-align: center;
}

.custom-datatable th {
  background-color: #f2f2f2;
  padding: 8px;
}

.custom-datatable td {
  padding: 8px;
}
</style>
