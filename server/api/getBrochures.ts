import getBrochures from "../utils/getBrochures";

export default defineEventHandler(async (event) => {
  try {
    const brochure = await getBrochures();
    return { status: 200, message: brochure.message };
  } catch (error) {
    console.log(error);
    throw createError(error as unknown as Error);
  }
});
