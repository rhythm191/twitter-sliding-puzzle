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

    const newPieces = indexes.map((index, nextIndex) => ({
      ...state.pieces[index],
      position: indexToPosition(nextIndex, state.pieceNum),
      missing: false,
    }));

    // ランダムに空白をつける
    const missingIndex = Math.floor(Math.random() * state.pieceNum);
    newPieces[missingIndex].missing = true;

    return {
      ...state,
      pieces: newPieces,
    };
  })
  .case(actions.debugRandom, state => {
    const newPieces = [...state.pieces];
    newPieces[0] = state.pieces[1];
    newPieces[1] = state.pieces[0];
    newPieces[0].position = indexToPosition(0, state.pieceNum);
    newPieces[1].position = indexToPosition(1, state.pieceNum);

    newPieces[0].missing = true;

    return {
      ...state,
      pieces: newPieces,
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

    pieces.forEach(piece => (piece.slideTo = undefined));

    const missingIndex = pieces.findIndex(piece => piece.missing);
    const puzzleLength = Math.sqrt(state.pieceNum);

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
    return {
      ...state,
      pieces: pieces,
    };
  })
  .case(actions.swap, (state, payload) => {
    const newPieces = [...state.pieces];
    newPieces[payload.src] = state.pieces[payload.dest];
    newPieces[payload.dest] = state.pieces[payload.src];
    newPieces[payload.src].position = indexToPosition(payload.src, state.pieceNum);
    newPieces[payload.dest].position = indexToPosition(payload.dest, state.pieceNum);

    return {
      ...state,
      pieces: newPieces,
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
