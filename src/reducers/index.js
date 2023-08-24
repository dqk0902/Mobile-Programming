import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer, 
  user: userReducer,
});

export default rootReducer;

