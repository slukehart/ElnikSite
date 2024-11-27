import admin from "../utils/admin";
import { GetProducts, Products, ProductTableInfo } from "~/types";

const db = admin.firestore();

async function getProducts(): Promise<{
  message: Products[] | string;
  status: number;
}> {
  try {
    const customOrder: { [key: string]: number } = {
      FSD: 1,
      TDS: 2,
      CF: 3,
      AE: 4,
    };

    const productsCollection = await db.collection("products").get();
    const products: Products[] = [];
    const sortedData = productsCollection.docs
      .map((doc) => ({
        ...(doc.data() as Products),
        id: doc.id,
      }))
      .sort((a, b) => customOrder[a.type] - customOrder[b.type]) as Products[];

    for (const doc of sortedData) {
      // Assuming productsCollection is a QuerySnapshot

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
        name: doc.name,
        description: doc.description,
        shortDescription: doc.shortDescription,
        img: doc.img,
        brochure: doc.brochure,
        brochureImage: doc.brochureImage,
        type: doc.type,
      });
    }

    return { status: 200, message: products };
  } catch (error) {
    console.error("Error retrieving documents:", error);
    return { status: 500, message: "Failed to retrieve products" };
  }
}

export default getProducts;
