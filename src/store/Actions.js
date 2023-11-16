export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    };
};
export const updateProduct = (updatedProduct) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: updatedProduct,
    };
};
export const removeProduct = (productNumber) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: productNumber,
    };
};
