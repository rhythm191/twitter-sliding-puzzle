import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { AppState } from "../types/state";
import { puzzleReducer } from "../reducers/puzzle";
import { piecesReducer } from "../reducers/piece";
import rootSaga from "../sagas";

const reducer = combineReducers<AppState>({
  puzzle: puzzleReducer,
  pieces: piecesReducer,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
