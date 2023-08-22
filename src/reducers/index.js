import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  // Add other reducers here
});

export default rootReducer;
