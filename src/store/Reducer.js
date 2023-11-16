const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case 'UPDATE_PRODUCT':
            const updatedProducts = state.products.map((product) => {
                if (product.productNumber === action.payload.productNumber) {
                    return action.payload;  }
                return product;
            });
            return {
                ...state,
                products: updatedProducts,
            };
        case 'REMOVE_PRODUCT':
            const productsUpdated = state.products.filter(
                (product) => product.productNumber !== action.payload
            );
            return {
                ...state,
                products: productsUpdated,
            };
        default:
            return state;
    }
};

export default reducer;
