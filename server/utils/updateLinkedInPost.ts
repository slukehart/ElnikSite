import { UpdatePostData } from "~/types";

import admin from "../utils/admin";

export async function updateLinkedInpost(postData: UpdatePostData) {
  const db = admin.firestore();

  await db.collection("blog").doc(postData.id).update({
    author: postData.author,
    subject: postData.subject,
    tag: postData.tag,
    title: postData.title,
    image: postData.imageLink,
    date_updated: new Date(),
  });
}
