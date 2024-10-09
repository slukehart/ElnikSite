import { defineStore } from "pinia";
import type { GetProducts } from "../types";

export const useProductStore = defineStore("ProductStore", () => {
  async function getProducts() {
    try {
      const data: GetProducts = await $fetch(`/api/getProducts`);
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  return {
    getProducts,
  };
});
