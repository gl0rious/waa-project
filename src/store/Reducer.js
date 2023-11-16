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
        default:
            return state;
    }
};

export default reducer;
