import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getMiddlewares } from "./middlewares";
import { reducer } from "./reducers";

const middlewares = getMiddlewares()

export const store = createStore(reducer, composeWithDevTools(middlewares));
