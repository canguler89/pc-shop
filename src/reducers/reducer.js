import { ADD_TO_CART, REMOVE } from "../actions/actionsTypes";

const INITIAL_STATE = [];

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE:
      return state;
    default:
      return state;
  }
};
