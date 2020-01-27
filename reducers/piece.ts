import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/pieces";
import { Piece } from "../types/piece";
import uuid from "uuid/v4";
import { indexToPosition } from "../utils/position";

export interface PiecesState {
  pieceNum: number;
  pieces: Piece[];
}

const initialState: PiecesState = {
  pieceNum: 9,
  pieces: [],
};

// スライド情報を付与する関数
function grandSlideTo(pieces: Piece[]) {
  pieces.forEach(piece => (piece.slideTo = undefined));

  const missingIndex = pieces.findIndex(piece => piece.missing);
  const puzzleLength = Math.sqrt(pieces.length);

  if (
    missingIndex - 1 >= 0 &&
    pieces[missingIndex - 1].position.y == pieces[missingIndex].position.y
  ) {
    pieces[missingIndex - 1].slideTo = { src: missingIndex - 1, dest: missingIndex };
  }

  if (
    missingIndex + 1 < pieces.length &&
    pieces[missingIndex + 1].position.y == pieces[missingIndex].position.y
  ) {
    pieces[missingIndex + 1].slideTo = { src: missingIndex + 1, dest: missingIndex };
  }

  if (missingIndex - puzzleLength >= 0) {
    pieces[missingIndex - puzzleLength].slideTo = {
      src: missingIndex - puzzleLength,
      dest: missingIndex,
    };
  }

  if (missingIndex + puzzleLength < pieces.length) {
    pieces[missingIndex + puzzleLength].slideTo = {
      src: missingIndex + puzzleLength,
      dest: missingIndex,
    };
  }
}

export const piecesReducer = reducerWithInitialState(initialState)
  .case(actions.initPieces, state => {
    const pieces: Piece[] = [];

    for (let i = 0; i < state.pieceNum; i++) {
      pieces.push({
        id: uuid(),
        originPosition: indexToPosition(i, state.pieceNum),
        position: indexToPosition(i, state.pieceNum),
        missing: false,
        slideTo: undefined,
      });
    }
    // ランダムに空白をつける
    const missingIndex = Math.floor(Math.random() * state.pieceNum);
    pieces[missingIndex].missing = true;

    // 移動可能情報を追加
    grandSlideTo(pieces);

    return {
      ...state,
      pieces: pieces,
    };
  })
  .case(actions.random, state => {
    const indexes = [...Array(state.pieceNum).keys()];

    for (let i = indexes.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = indexes[i];
      indexes[i] = indexes[r];
      indexes[r] = tmp;
    }

    return {
      ...state,
      pieces: indexes.map((index, nextIndex) => ({
        ...state.pieces[index],
        position: indexToPosition(nextIndex, state.pieceNum),
      })),
    };
  })
  .case(actions.slide, (state, payload) => {
    const newPieces = [...state.pieces];
    newPieces[payload.src] = state.pieces[payload.dest];
    newPieces[payload.dest] = state.pieces[payload.src];
    newPieces[payload.src].position = indexToPosition(payload.src, state.pieceNum);
    newPieces[payload.dest].position = indexToPosition(payload.dest, state.pieceNum);

    // 移動可能情報を更新
    grandSlideTo(newPieces);

    return {
      ...state,
      pieces: newPieces,
    };
  });
