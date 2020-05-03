import { all } from "redux-saga/effects";
import piecesSaga from "./pieces";
import puzzleSaga from "./puzzle";

export default function* rootSaga() {
  yield all([piecesSaga(), puzzleSaga()]);
}
