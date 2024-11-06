import admin from "../utils/admin";
import { GetProducts, Products, ProductTableInfo } from "~/types";

const db = admin.firestore();

async function getProducts(): Promise<{
  message: Products[] | string;
  status: number;
}> {
  try {
    const productsCollection = await db.collection("products").get();
    const products: Products[] = [];

    for (const doc of productsCollection.docs) {
      // Assuming productsCollection is a QuerySnapshot
      const data = doc.data();
      // const docRef = db.collection("products").doc(doc.id);
      // let productTableInfo: ProductTableInfo | null = null;

      // const snapshot = await docRef.collection("product_statistics").get();
      // snapshot.forEach((doc) => {
      //   const data = doc.data();
      //   productTableInfo = {
      //     alloyProccessing: data.alloy_processing,
      //     atmospheres: data.atmospheres,
      //     maxTempature: data.max_tempature,
      //     processVolumes: data.process_volumes,
      //     technicalInnovation: data.technical_innovation,
      //   };
      // });

      products.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        shortDescription: data.shortDescription,
        img: data.img,
        brochure: data.brochure,
        brochureImage: data.brochureImage,
      });
    }

    return { status: 200, message: products };
  } catch (error) {
    console.error("Error retrieving documents:", error);
    return { status: 500, message: "Failed to retrieve products" };
  }
}

export default getProducts;
