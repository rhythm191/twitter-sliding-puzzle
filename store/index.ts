import { combineReducers, createStore } from "redux";
import { PazzuleState, puzzleReducer } from "../reducers/puzzle";
import { PiecesState, piecesReducer } from "../reducers/piece";

export type AppState = {
  puzzle: PazzuleState;
  pieces: PiecesState;
};

const reducer = combineReducers<AppState>({
  puzzle: puzzleReducer,
  pieces: piecesReducer,
});

export const store = createStore(reducer);
