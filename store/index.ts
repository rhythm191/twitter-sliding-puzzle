import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { PuzzleState, puzzleReducer } from "../reducers/puzzle";
import { PiecesState, piecesReducer } from "../reducers/piece";
import rootSaga from "../sagas";

export type AppState = {
  puzzle: PuzzleState;
  pieces: PiecesState;
};

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
