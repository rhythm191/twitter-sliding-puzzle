import { reducerWithInitialState } from "typescript-fsa-reducers";
import { PuzzleState } from "@/types/state";
import * as actions from "@/actions/puzzle";

const initialState: PuzzleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 1536,
    height: 2048,
  },
  wrapperSize: {
    width: 768,
    height: 710,
  },
  canvas: {
    width: (1536 * 768) / 2048,
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
  .case(actions.setCanvas, (state, payload) => {
    console.log("canvas resize", {
      width: payload.width,
      height: payload.height,
    });

    let canvas;

    if (state.imageSize.width < payload.width && state.imageSize.height < payload.height) {
      canvas = {
        width: state.imageSize.width,
        height: state.imageSize.height,
      };
    } else if (state.imageSize.width - payload.width > state.imageSize.height - payload.height) {
      const width = (state.imageSize.width * payload.height) / state.imageSize.height;
      canvas = {
        width: width,
        height: (state.imageSize.height * payload.width) / state.imageSize.width,
      };

      console.log("canvas width long resize", canvas);
    } else {
      const width = (state.imageSize.width * payload.height) / state.imageSize.height;
      canvas = {
        width: payload.width < width ? payload.width : width,
        height: payload.height,
      };
      console.log("canvas height long resize", canvas);
    }

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
