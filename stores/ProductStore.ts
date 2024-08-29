import { defineStore } from "pinia";
import type { GetProducts } from "../types";

export const useProductStore = defineStore("ProductStore", () => {
  async function getProducts() {
    try {
      return await $fetch(`/api/getProducts`);
    } catch (e) {
      console.error(e);
    }
  }

  return {
    getProducts,
  };
});
