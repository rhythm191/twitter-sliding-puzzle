import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/pieces";
import { Piece } from "../types/piece";
import uuid from "uuid/v4";

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
    const length = Math.sqrt(state.pieceNum);
    const pieces: Piece[] = [];

    for (let h = 0; h < length; h++) {
      for (let w = 0; w < length; w++) {
        pieces.push({
          id: uuid(),
          originPosition: {
            x: w,
            y: h,
          },
          missing: false,
          slideTo: undefined,
        });
      }
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

    return {
      ...state,
      pieces: indexes.map(index => state.pieces[index]),
    };
  })
  .case(actions.slide, (state, payload) => {
    const newPieces = [...state.pieces];
    newPieces[payload.src] = state.pieces[payload.dest];
    newPieces[payload.dest] = state.pieces[payload.src];

    return {
      ...state,
      pieces: newPieces,
    };
  });
