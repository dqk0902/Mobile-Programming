import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer, 
});

export default rootReducer;

