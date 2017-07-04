export function addToCart(dish){
  return {
    type: 'ADD_TO_CART',
    payload: dish
  }
}