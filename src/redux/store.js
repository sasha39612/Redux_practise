import { createStore, combineReducers } from 'redux';
import userReducer from './user';
import basketReducer, { selectors as basketSelectors } from './basket';

export const selectors = {
 getBasketItems: (state) => {
  return basketSelectors.getItems(state.basket);
 },
};

const reducer = combineReducers({
 user: userReducer,
 basket: basketReducer,
});

const store = createStore(reducer);

export default store;