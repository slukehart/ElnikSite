export default defineEventHandler(async (event) => {
  try {
    const uuid = getRouterParam(event, "uuid");

    if (uuid) {
      const result = await getProductTableInfo(uuid);
      return { status: 200, message: result };
    }
  } catch (e: any) {
    throw createError(e);
  }
});
