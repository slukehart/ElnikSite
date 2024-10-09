import admin from "../utils/admin";
import { GetProducts, Products } from "~/types";

const db = admin.firestore();

async function getProducts(): Promise<{
  message: Products[] | string;
  status: number;
}> {
  try {
    const productsCollection = await db.collection("products").get();
    const products: Products[] = [];

    productsCollection.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        shortDescription: data.shortDescription,
        img: data.img,
        brochure: data.brochure,
        brochureImage: data.brochureImage,
      });
    });

    return { status: 200, message: products };
  } catch (error) {
    console.error("Error retrieving documents:", error);
    return { status: 500, message: "Failed to retrieve products" };
  }
}

export default getProducts;
