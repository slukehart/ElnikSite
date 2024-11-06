import { defineStore } from "pinia";
import type { GetProducts, Products } from "../types";

export const useProductStore = defineStore("ProductStore", () => {
  const products = ref<Products[]>([]);
  async function getProducts() {
    try {
      const data: GetProducts = await $fetch(`/api/getProducts`);
      products.value = data.message;
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  return {
    getProducts,
    products,
  };
});
