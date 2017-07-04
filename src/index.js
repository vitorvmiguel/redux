// dependencies
import React                              from 'react';
import logger                             from 'redux-logger';
import { render }                         from 'react-dom';
import { Provider }                       from 'react-redux';
import { applyMiddleware, createStore }   from 'redux';

// components
import App from './components/App';
import './css/index.css';
// state management
import reducers  from './reducers/index';
// import { addToCart } from './actions/cartActions';
// import { postDish, deleteDish, updateDish } from './actions/dishesActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);