import { DocumentData, DocumentReference } from "firebase-admin/firestore";
import admin from "../utils/admin";
import { LinkedInPost, LinkedInPostResults } from "~/types";

export async function deletePost(
  data: LinkedInPost,
): Promise<LinkedInPostResults | { status: number; message: any }> {
  try {
    const db = admin.firestore();
    await db.collection("blog").doc(data.id).delete();
    return getLinkedInPosts();
  } catch (e: any) {
    console.log(e);
    return { status: 500, message: e };
  }
}
