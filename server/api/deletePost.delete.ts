import { LinkedInPostResults } from "~/types";
import { deletePost } from "../utils/deletePost";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const result: LinkedInPostResults = await deletePost(data);
    if (result.status === 200) {
      return { status: 200, message: result };
    } else {
      throw createError("Error delete post");
    }
  } catch (e: any) {
    throw createError(e);
  }
});
