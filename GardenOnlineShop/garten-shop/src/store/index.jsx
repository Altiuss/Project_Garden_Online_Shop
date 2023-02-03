import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./reducers/categories";
import { productsReducer } from "./reducers/products";
import thunk from 'redux-thunk'




const rootReducer = combineReducers({
    categories: categoriesReducer,
    products : productsReducer,
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));