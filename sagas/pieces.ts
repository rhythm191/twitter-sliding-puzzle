import { put, takeEvery, select } from "redux-saga/effects";
import deepEqual from "deep-equal";
import * as puzzleActions from "../actions/puzzle";
import * as picesActions from "../actions/pieces";
import { Piece } from "../types/piece";

interface SwapAction {
  type: string;
  payload: {
    src: number;
    dest: number;
  };
}

function* slidePieces(action: SwapAction) {
  yield put(picesActions.swap(action.payload));
  yield put(picesActions.resetSlideGrant());

  const pieces: Piece[] = yield select(state => state.pieces.pieces);

  if (pieces.every(piece => deepEqual(piece.originPosition, piece.position))) {
    yield put(puzzleActions.complete());
    yield put(picesActions.complete());
  } else {
    yield put(picesActions.grantSlidable());
  }
}

export default function* piecesSaga() {
  yield takeEvery(picesActions.slide.type, slidePieces);
}
