import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'


const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(rootReducer, undefined, applyMiddleware(logger,saga));

saga.run(rootSaga);

export default store;
