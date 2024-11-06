export default async function getProductTableInfo(uuid: string) {
  const db = admin.firestore();

  const docRef = db.collection("products").doc(uuid);
  const snapshot: FirebaseFirestore.QuerySnapshot<
    FirebaseFirestore.DocumentData,
    FirebaseFirestore.DocumentData
  > = await docRef.collection("product_statistics").get();
  const data = snapshot.docs[0].data();
  const productTableInfo = {
    alloyProccessing: data.alloy_processing,
    atmospheres: data.atmospheres,
    maxTempature: data.max_tempature,
    processVolumes: data.process_volumes,
    technicalInnovation: data.technical_innovation,
  };
  return productTableInfo;
}
