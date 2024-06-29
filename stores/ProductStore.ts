import { defineStore } from "pinia";
import { processDetector } from "@opentelemetry/resources";
import type { GetProducts } from "../types";

export const useProductStore = defineStore("ProductStore", () => {
  async function getProducts() {
    try {
      const product: GetProducts = await $fetch(`/api/getProducts`);
      console.log("store ", product);
      return product;
    } catch (e) {
      console.error(e);
    }
  }

  return {
    getProducts,
  };
});
