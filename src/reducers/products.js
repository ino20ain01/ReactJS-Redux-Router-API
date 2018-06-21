import * as Types from '../constants/ActionTypes';
import findIndex from '../utils/findIndex';

let initialState = [];


const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        default:
            return state;
    }
};

export default products;