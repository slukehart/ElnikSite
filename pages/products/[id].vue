<script setup lang="ts">
import { useProductStore } from "../../stores/ProductStore";
import { useRoute } from "vue-router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

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

const { getProducts } = useProductStore();
const productList = await getProducts();
console.log("producty ", productList);

const product = productList?.message.find((product) => product.id === routeId);
console.log("producty ", product);
import GeneralLayout from "../../layout/GeneralLayout.vue";
</script>

<template>
  <div class="flex flex-col space-y-16 first-neg-margin bg-slate-200">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div
      class="flex p-6 bg-white items-center justify-center rounded-lg shadow-lg space-x-6"
    >
      <div class="w-1/2 rounded-lg overflow-hidden shadow-2xl focus:shadow-lg">
        <div class="relative pb-2/3">
          <img :src="product?.img" :alt="product?.name" />
        </div>
      </div>
      <div class="border-l-2 min-h-96 border-blue-200"></div>
      <div class="w-1/2 flex flex-col justify-center space-y-4">
        <h2 class="text-4xl font-bold text-gray-800">{{ product?.name }}</h2>
        <p class="text-xs text-gray-600">{{ product?.description }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <DataTable
        :value="productFacts"
        tableStyle="min-width: 50rem; border: 1px"
        responsive-layout="scroll"
      >
        <Column
          field="code"
          header="Code"
          sortable
          style="width: 25%; text-align: center; border: 10px"
        ></Column>
        <Column
          field="name"
          header="Name"
          sortable
          style="width: 25%; text-align: center"
        ></Column>
        <Column
          field="category"
          header="Category"
          sortable
          style="width: 25%; text-align: center"
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          sortable
          style="width: 25%; text-align: center"
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
