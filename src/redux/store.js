import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	middleware = [logger, ...middleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
