import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { middleware } from "./middleware";

import Work from "./Work";

const reducers = combineReducers({
  Work
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
