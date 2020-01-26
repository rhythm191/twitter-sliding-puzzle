import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/puzzle";

export interface PazzuleState {
  imageUrl: string;
  imageSize: {
    width: number;
    height: number;
  };
  canvas: {
    width: number;
    height: number;
  };
}

const initialState: PazzuleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 1536,
    height: 2048,
  },
  canvas: {
    width: 627,
    height: 840,
  },
};

export const puzzleReducer = reducerWithInitialState(initialState).case(
  actions.setImage,
  (state, payload) => {
    const img = new Image();
    img.src = payload;

    const imageSize = {
      width: img.width,
      height: img.height,
    };

    return {
      ...state,
      imageUrl: payload,
      imageSize,
    };
  }
);
