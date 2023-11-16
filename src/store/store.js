import { createStore } from 'redux';
import productReducer from "./Reducer.js";

const store = createStore(productReducer);

export default store;
