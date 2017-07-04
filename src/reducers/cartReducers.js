export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case 'ADD_TO_CART':
      return {cart: [...state.cart, ...action.payload]}
    case 'UPDATE_CART':
      const currentDishToUpdate = [...state.cart]

      const indexToUpdate = currentDishToUpdate.findIndex(
        function(dish) {
          return dish.id === action.id;
        }
      )
      
      const newDishToUpdate = {
        ...currentDishToUpdate[indexToUpdate],
            portions: currentDishToUpdate[indexToUpdate].portions + action.portions
            // id: action.payload.id,
            // imageURL: action.payload.imageURL,
            // dishName: action.payload.dishName,
            // chefName: action.payload.chefName,
            // averageRating: action.payload.averageRating,
            // numberOfRatings: action.payload.numberOfRatings,
            // numberOfComments: action.payload.numberOfComments,
            // availablePortions: action.payload.availablePortions,
            // price: action.payload.price
      }
      
      let cartUpdate = [...currentDishToUpdate.slice(0, indexToUpdate), newDishToUpdate,
        ...currentDishToUpdate.slice(indexToUpdate)]
      return {...state, cart: cartUpdate}
    case 'DELETE_FROM_CART':
      return {cart: [...state, ...action.payload]}
    default: 
      return state;
  }
}