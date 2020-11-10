import data from "../data/data"

const INITIAL_STATE = {
  items: data,
  cart: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, cart:[...state.cart, action.payload]};
    case "REMOVE":
      return {...state, cart: [...state.cart.filter(cartItem=> cartItem !== action.payload)]}
    default:
      return state;
  }
};

export default reducer;