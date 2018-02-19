import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
// import createLogger from "redux-logger";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export function store(initialState?: any) {
    const logger = createLogger();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger));

    return store;
}

export default store;