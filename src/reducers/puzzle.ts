import { reducerWithInitialState } from "typescript-fsa-reducers";
import { PuzzleState } from "@/types/state";
import * as actions from "@/actions/puzzle";
import { calcCanvasSize } from "@/utils/canvas_size";

const initialState: PuzzleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 1536,
    height: 2048,
  },
  wrapperSize: {
    width: 1,
    height: 1,
  },
  canvas: {
    width: 1,
    height: 1,
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
  .case(actions.setCanvas, (state, payload) => {
    const canvas = calcCanvasSize(state.imageSize, payload);

    return {
      ...state,
      wrapperSize: {
        width: payload.width,
        height: payload.height,
      },
      canvas,
    };
  })
  .case(actions.complete, state => {
    return {
      ...state,
      complete: true,
    };
  });
