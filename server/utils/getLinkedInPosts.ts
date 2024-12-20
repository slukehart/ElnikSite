import admin from "../utils/admin";
import {
  GetProducts,
  LinkedInPost,
  LinkedInPostResults,
  Products,
} from "~/types";
import { DateTime } from "luxon";
import { DocumentData } from "firebase-admin/firestore";
import { nextTick } from "vue";
const db = admin.firestore();

async function getProducts(
  nextPost?: DocumentData,
): Promise<LinkedInPostResults> {
  try {
    if (nextPost) {
      const posts = await db
        .collection("blog")
        .orderBy("date_added", "asc")
        .startAfter(nextPost)
        .get();
      const linkedPosts: LinkedInPost[] = [];
      const lastPost = posts.docs[posts.docs.length - 1];

      posts.forEach((doc) => {
        const data = doc.data();
        const dateTimeToUTC = DateTime.fromSeconds(data.date_added.seconds);
        const formattedDate = dateTimeToUTC.toFormat("dd MMMM yyyy");

        linkedPosts.push({
          id: data.id,
          author: data.author,
          date: new Date(formattedDate),
          subject: data.subject,
          tag: data.tag,
          title: data.title,
          postUrl: data.postUrl,
          imageLink: data.image,
        });
      });

      return { status: 200, message: linkedPosts, next_set: lastPost };
    }

    const posts = await db
      .collection("blog")
      .orderBy("date_added", "desc")
      .get();
    const linkedPosts: LinkedInPost[] = [];
    const lastPost = posts.docs[posts.docs.length - 1];

    posts.forEach((doc) => {
      const data = doc.data();
      const dateTimeToUTC = DateTime.fromSeconds(data.date_added.seconds);
      const formattedDate = dateTimeToUTC.toFormat("dd MMMM yyyy");

      linkedPosts.push({
        id: data.id,
        author: data.author,
        date: new Date(formattedDate),
        subject: data.subject,
        tag: data.tag,
        title: data.title,
        postUrl: data.postUrl,
        imageLink: data.image,
      });
    });

    return { status: 200, message: linkedPosts, next_set: lastPost };
  } catch (error) {
    console.error("Error retrieving documents:", error);
    return { status: 500, failure: "Failed to retrieve products", message: [] };
  }
}

export default getProducts;
