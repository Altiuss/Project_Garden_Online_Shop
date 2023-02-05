const defaultState = [];


const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
});




export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
      
        return [...state, action.payload];
    } else {
        return state;
    }
    }