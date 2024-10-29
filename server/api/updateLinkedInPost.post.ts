export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  try {
    await updateLinkedInpost(data);
    return { status: 200, message: "success" };
  } catch (e) {
    console.log(e);
    throw createError("Error updating data");
  }
});
