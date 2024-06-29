import getProducts from '~/server/utils/getProducts';


export default defineEventHandler(async (event) => {
    try {
        const products = await getProducts();
        console.log(products)
        return {status: 200, message: products.message};

    }
    catch (error) {
        console.log(error);
        throw createError(error as unknown as Error);
    }

})