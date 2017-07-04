import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './css/index.css';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers  from './reducers/index';

import { addToCart } from './actions/cartActions';
import { postDish, deleteDish, updateDish } from './actions/dishesActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.dispatch(postDish(
  [
    {	
      id: "0",
      imageURL: "images/1.jpg",
      dishName: "Amazing Dish",
      chefName: "Mighty Chef",
      averageRating: "4.8",
      numberOfRatings: "8",
      numberOfComments: "6",
      availablePortions: "4",
      price: "6.99"
    },
    {	
      id: "1",
      imageURL: "images/2.jpg",
      dishName: "Extraordinary Dish",
      chefName: "Holy Chef",
      averageRating: "4.7",
      numberOfRatings: "80",
      numberOfComments: "5",
      availablePortions: "32",
      price: "4.99"
    },
    {	
      id: "3",
      imageURL: "images/3.jpg",
      dishName: "Gorgeous Dish",
      chefName: "Super Chef",
      averageRating: "4.5",
      numberOfRatings: "13",
      numberOfComments: "10",
      availablePortions: "21",
      price: "7.99"
    }
  ]
));

store.dispatch(deleteDish(
  {id: 1}
));

store.dispatch(updateDish(
  {
    id: "1",
    imageURL: "images/1.jpg",
    dishName: "Mighty Amazing Dish",
    chefName: "Mighty Chef",
    averageRating: "4.9",
    numberOfRatings: "18",
    numberOfComments: "16",
    availablePortions: "14",
    price: "4.99"
  }
));

store.dispatch(addToCart(
  [{id: 1}]
));

store.subscribe(function(){
  console.log('current state is: ', store.getState());
});

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);