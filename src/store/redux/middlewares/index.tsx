import { applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'

export const getMiddlewares = () => {
  return applyMiddleware(
    createLogger()
  );
};
