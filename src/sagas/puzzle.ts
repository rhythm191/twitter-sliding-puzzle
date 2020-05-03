import { put, takeEvery } from "redux-saga/effects";
import * as puzzleAction from "@/actions/puzzle";
import * as piecesAction from "@/actions/pieces";

function* initializePuzzle() {
  yield put(piecesAction.initPieces());
  yield put(piecesAction.random());
  yield put(piecesAction.grantSlidable());
}

function* initializeDebugPuzzle() {
  yield put(piecesAction.initPieces());
  yield put(piecesAction.debugRandom());
  yield put(piecesAction.grantSlidable());
}

function* setRandomPuzzle() {
  yield put(piecesAction.random());
  yield put(piecesAction.grantSlidable());
}

export default function* puzzleSaga() {
  yield takeEvery(puzzleAction.init.type, initializePuzzle);
  yield takeEvery(puzzleAction.debugInit.type, initializeDebugPuzzle);
  yield takeEvery(puzzleAction.setRandom.type, setRandomPuzzle);
}
