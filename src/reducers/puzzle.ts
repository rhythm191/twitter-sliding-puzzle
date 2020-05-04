import { reducerWithInitialState } from "typescript-fsa-reducers";
import { PuzzleState } from "@/types/state";
import * as actions from "@/actions/puzzle";

const initialState: PuzzleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 1536,
    height: 2048,
  },
  canvas: {
    width: 768,
    height: 710,
  },
  complete: false,
};

export const puzzleReducer = reducerWithInitialState(initialState)
  .case(actions.setImage, (state, payload) => {
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
      complete: false,
    };
  })
  .case(actions.complete, state => {
    return {
      ...state,
      complete: true,
    };
  });
