import getProducts from "~/server/utils/getProducts";

export default defineEventHandler(async (event) => {
  try {

  }
  catch (error) {
    console.log(error);
    throw createError(error as unknown as Error);
  }

})