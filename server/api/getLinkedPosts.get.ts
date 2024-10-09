export default defineEventHandler(async (event) => {
  try {
    const data = getQuery(event);
    const hasKeys = Object.keys(data).length > 0;
    console.log(Object.keys(data));

    const func = hasKeys ? getLinkedInPosts(data) : getLinkedInPosts();
    const posts = func;
    return posts;
  } catch (error: any) {
    console.log(error);
    throw createError(error);
  }
});
