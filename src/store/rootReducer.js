import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import dirReducer from './directory/dirReducer';
import shopReducer from './shop/shopReducer';

const config = {
  key: 'root', 
  storage, 
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer, 
  directory: dirReducer, 
  shop: shopReducer
});

export default persistReducer(config, rootReducer)