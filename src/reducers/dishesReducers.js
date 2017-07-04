const dishesReducers = function(state={dishes:[]}, action) {
  switch(action.type) {
    case 'POST_DISH':
      // let dishes = state.dishes.concat(action.payload)
      // return {dishes};
      return {dishes:[...state.dishes, ...action.payload]}
    case 'DELETE_DISH':
      const currentDishToDelete = [...state.dishes]

      const indexToDelete = currentDishToDelete.findIndex(
        function(dish) {
          return dish.id === action.payload.id;
        }
      )
      return {dishes: [...currentDishToDelete.slice(0, indexToDelete),
        ...currentDishToDelete.slice(indexToDelete + 1)]}
    case 'UPDATE_DISH':
      const currentDishToUpdate = [...state.dishes]

      const indexToUpdate = currentDishToUpdate.findIndex(
        function(dish) {
          return dish.id === action.payload.id;
        }
      )
      
      const newDishToUpdate = {
        ...currentDishToUpdate[indexToUpdate],
            imageURL: action.payload.imageURL,
            dishName: action.payload.dishName,
            chefName: action.payload.chefName,
            averageRating: action.payload.averageRating,
            numberOfRatings: action.payload.numberOfRatings,
            numberOfComments: action.payload.numberOfComments,
            availablePortions: action.payload.availablePortions,
            price: action.payload.price
      }
      
      return {dishes: [...currentDishToUpdate.slice(0,indexToUpdate), newDishToUpdate ,
        ...currentDishToUpdate.slice(indexToUpdate + 1)]}
    default: 
      return state;
  }
}

export default dishesReducers;