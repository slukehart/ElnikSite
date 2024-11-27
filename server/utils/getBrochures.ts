import { Brochure } from "~/types";

const db = admin.firestore();

export default async function getBrochures(): Promise<{
  message: Brochure[] | string;
  status: number;
}> {
  try {
    const customOrder: { [key: string]: number } = {
      TBS: 1,
      FSDO: 2,
      CI: 3,
      ED: 4,
    };
    const brochureCollection = await db.collection("brochures").get();
    const brochures: Brochure[] = [];
    const sortedData = brochureCollection.docs
      .map((doc) => doc.data())
      .sort((a, b) => customOrder[a.group] - customOrder[b.group]);

    for (const doc of sortedData) {
      brochures.push({
        name: doc.name,
        group: doc.group,
        text: doc.text,
        brochure: doc.brochure,
      });
    }

    return { status: 200, message: brochures };
  } catch (e) {
    return { status: 500, message: "Failed to retrieve products" };
  }
}
