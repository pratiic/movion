import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
