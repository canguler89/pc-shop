export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE = "REMOVE";

export function addToCart(item){
    return{
        type: ADD_TO_CART,
        payload: item
    }
}
export function remove(item){
    return{
        type: REMOVE,
        payload: item
    }
}