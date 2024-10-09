import admin from "../utils/admin";
import { GetProducts, LinkedInPost, Products } from "~/types";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export async function addLinkedInPost(posts: LinkedInPost) {
  const db = admin.firestore();
  const linkedInPostCollection = await db.collection("blog").doc();

  try {
    const result = await await db.collection("blog").add({});
    await db
      .collection("blog")
      .doc(result.id)
      .set({
        id: result.id,
        author: posts.author,
        date_added: new Date(posts.date),
        subject: posts.subject,
        tag: posts.tag,
        title: posts.title,
        postUrl: posts.postUrl,
      });

    return result;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
}
