import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import * as home from "./reducers/home";
import * as application from "./reducers/application";

export default function configureStore(history, initialState) {
  const reducers = {
    home: home.HomeReducer,
    app: application.ApplicationReducer,
  };

  const middleware = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
