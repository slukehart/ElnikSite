<script setup lang="ts">
import { useProductStore } from "../../stores/ProductStore";
import { useRoute } from "vue-router";
import GeneralLayout from "../../layout/GeneralLayout.vue";

const showGridLine = ref(true);

const productFacts = ref([
  {
    code: "some code",
    name: "some name",
    category: "some category",
    quantity: "some quality",
  },
  {
    code: "some code",
    name: "some name",
    category: "some category",
    quantity: "some quality",
  },
  {
    code: "some code",
    name: "some name",
    category: "some category",
    quantity: "some quality",
  },
  {
    code: "some code",
    name: "some name",
    category: "some category",
    quantity: "some quality",
  },
]);

const routeId = useRoute().params.id;

type ProductMessage = {
  id: string;
  name: string;
  description: string;
};

const { getProducts } = useProductStore();
const productList = ref<{
  status: number;
  message: ProductMessage[] | string;
} | null>(null);
const product = ref<ProductMessage | null>();

onMounted(async () => {
  const result:
    | { status: number; message: ProductMessage[] | string }
    | undefined = await getProducts();
  if (result?.status === 200 && result?.message) {
    productList.value = result;
    if (Array.isArray(productList.value.message))
      product.value = productList.value?.message.find(
        (product: ProductMessage) => product.id === routeId,
      );
  }
});
</script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>

    <div class="flex h-1/2 bg-white items-center justify-center space-x-6">
      <div class="w-1/2 overflow-hidden">
        <div class="relative pb-2/3">
          <a :href="product?.brochure" target="_blank">
            <img :src="product?.img" :alt="product?.name" />
          </a>
        </div>
      </div>
      <div
        class="border-l-2 min-h-screen md:hidden sm:hidden lg:block min-h-64 border-slate-950"
      ></div>
      <div class="w-1/2 flex flex-col justify-center">
        <h2
          class="text-4xl font-bold text-gray-800 uppercase"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          {{ product?.name }}
        </h2>
        <p class="text-sm text-gray-600">{{ product?.description }}</p>
        <div>
          <NuxtLink to="/Contact">
            <button class="mt-10">
              <p class="border-b-black border-b-2 uppercase">get a quote</p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center p-6">
      <DataTable
        :value="productFacts"
        tableStyle="min-width: 35rem; border: 1px"
        responsive-layout="scroll"
      >
        <Column field="code" header="Code" sortable style="width: 25%"></Column>
        <Column field="name" header="Name" sortable style="width: 25%"></Column>
        <Column
          field="category"
          header="Category"
          sortable
          style="width: 25%"
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          sortable
          style="width: 25%"
        ></Column>
      </DataTable>
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
