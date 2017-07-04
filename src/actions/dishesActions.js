export function postDish(dish){
  return {
    type: 'POST_DISH',
    payload: dish
  }
}

export function deleteDish(id){
  return {
    type: 'DELETE_DISH',
    payload: id
  }
}

export function updateDish(dish){
  return {
    type: 'UPDATE_DISH',
    payload: dish
  }
}