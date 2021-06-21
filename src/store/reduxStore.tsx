import { combineReducers, createStore } from "redux";
import slidesReducer from './questionsSlidesReducer';

let reducers = combineReducers({
  slides: slidesReducer,
});

let store = createStore(reducers);

export default store;