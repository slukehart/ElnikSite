import { error } from "firebase-functions/logger";
import { addLinkedInPost } from "../utils/addLinkedInPost";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const result = await addLinkedInPost(data);
  } catch (e: any) {
    console.log(e);
    throw createError(e);
  }
});
