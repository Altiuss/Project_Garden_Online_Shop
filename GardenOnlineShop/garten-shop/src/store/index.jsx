import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./reducers/categories";
import { productsReducer } from "./reducers/products";
import { categoryProductsReducer } from "./reducers/products_from_category";
import { productReducer } from "./reducers/product";
import thunk from 'redux-thunk'




const rootReducer = combineReducers({
    categories: categoriesReducer,
    products : productsReducer,
    categoryProducts : categoryProductsReducer,
    product : productReducer
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));