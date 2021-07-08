import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { movieReducers } from "./Movie/movieReducer";

const reducers = combineReducers({
    movieState: movieReducers,
  });

  const middlewares = [thunk];

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
  
  export default store;
  