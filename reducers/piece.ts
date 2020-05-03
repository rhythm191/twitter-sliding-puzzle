import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/pieces";
import { Piece } from "../types/piece";
import { PiecesState } from "../types/state";
import uuid from "uuid/v4";
import { indexToPosition } from "../utils/position";

const initialState: PiecesState = {
  pieceNum: 9,
  pieces: [],
  indexes: [],
};

export const piecesReducer = reducerWithInitialState(initialState)
  .case(actions.initPieces, state => {
    const pieces: Piece[] = [];
    const indexes: number[] = [];

    for (let i = 0; i < state.pieceNum; i++) {
      indexes.push(i);
      pieces.push({
        id: uuid(),
        originPosition: indexToPosition(i, state.pieceNum),
        position: indexToPosition(i, state.pieceNum),
        missing: false,
        slideTo: undefined,
      });
    }

    return {
      ...state,
      pieces,
      indexes,
    };
  })
  .case(actions.random, state => {
    // ランダムなindex列を生成
    const indexes = [...Array(state.pieceNum).keys()];
    for (let i = indexes.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = indexes[i];
      indexes[i] = indexes[r];
      indexes[r] = tmp;
    }

    const pieces = [...state.pieces];
    indexes.forEach((targetIndex, nextIndex) => {
      pieces[targetIndex].position = indexToPosition(nextIndex, state.pieceNum);
      pieces[targetIndex].missing = false;
    });

    // ランダムに空白をつける
    const missingIndex = Math.floor(Math.random() * state.pieceNum);
    pieces[missingIndex].missing = true;

    return {
      ...state,
      pieces,
      indexes,
    };
  })
  .case(actions.debugRandom, state => {
    const pieces = [...state.pieces];
    const indexes = [...state.indexes];

    [indexes[0], indexes[1]] = [indexes[1], indexes[0]];

    pieces[0].position = indexToPosition(1, state.pieceNum);
    pieces[1].position = indexToPosition(0, state.pieceNum);

    pieces[0].missing = true;

    return {
      ...state,
      pieces,
      indexes,
    };
  })
  .case(actions.resetSlideGrant, state => {
    return {
      ...state,
      pieces: state.pieces.map(piece => {
        piece.slideTo = undefined;
        return piece;
      }),
    };
  })
  .case(actions.grantSlidable, state => {
    const pieces = state.pieces;
    const indexes = state.indexes;

    pieces.forEach(piece => (piece.slideTo = undefined));

    const missingIndex = pieces.findIndex(piece => piece.missing);
    const baseIndex = indexes.findIndex(value => value === missingIndex);
    const puzzleLength = Math.sqrt(state.pieceNum);

    if (
      baseIndex - 1 >= 0 &&
      pieces[indexes[baseIndex - 1]].position.y == pieces[indexes[baseIndex]].position.y
    ) {
      pieces[indexes[baseIndex - 1]].slideTo = { src: baseIndex - 1, dest: baseIndex };
    }

    if (
      baseIndex + 1 < pieces.length &&
      pieces[indexes[baseIndex + 1]].position.y == pieces[indexes[baseIndex]].position.y
    ) {
      pieces[indexes[baseIndex + 1]].slideTo = { src: baseIndex + 1, dest: baseIndex };
    }

    if (baseIndex - puzzleLength >= 0) {
      pieces[indexes[baseIndex - puzzleLength]].slideTo = {
        src: baseIndex - puzzleLength,
        dest: baseIndex,
      };
    }

    if (baseIndex + puzzleLength < pieces.length) {
      pieces[indexes[baseIndex + puzzleLength]].slideTo = {
        src: baseIndex + puzzleLength,
        dest: baseIndex,
      };
    }
    return {
      ...state,
      pieces: pieces,
    };
  })
  .case(actions.swap, (state, payload) => {
    const pieces = [...state.pieces];
    const indexes = [...state.indexes];

    [indexes[payload.src], indexes[payload.dest]] = [indexes[payload.dest], indexes[payload.src]];
    pieces[indexes[payload.src]].position = indexToPosition(payload.src, state.pieceNum);
    pieces[indexes[payload.dest]].position = indexToPosition(payload.dest, state.pieceNum);

    return {
      ...state,
      pieces,
      indexes,
    };
  })
  .case(actions.complete, state => {
    return {
      ...state,
      pieces: state.pieces.map(piece => {
        piece.missing = false;
        return piece;
      }),
    };
  });
