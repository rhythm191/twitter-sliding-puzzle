import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/pieces";

interface SwapAction {
  type: string;
  payload: {
    src: number;
    dest: number;
  };
}

function* slidePieces(action: SwapAction) {
  yield put(actions.swap(action.payload));
  yield put(actions.grantSlidable());
}

export default function* piecesSaga() {
  yield takeEvery(actions.slide.type, slidePieces);
}
