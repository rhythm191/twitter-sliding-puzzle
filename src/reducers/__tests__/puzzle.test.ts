import { puzzleReducer as reducer } from "@/reducers/puzzle";
import { PuzzleState } from "@/types/state";
import * as actions from "@/actions/puzzle";

const initialState: PuzzleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 100,
    height: 100,
  },
  wrapperSize: {
    width: 50,
    height: 50,
  },
  canvas: {
    width: 50,
    height: 50,
  },
  complete: false,
};

describe("puzzle reducers test", () => {
  describe("canvas", () => {
    it("wrapper and canvas size update", () => {
      const satte = reducer(initialState, actions.setCanvas({ width: 200, height: 200 }));
      expect(satte.wrapperSize).toEqual({ width: 200, height: 200 });
      expect(satte.canvas).toEqual({ width: 100, height: 100 });
    });
  });

  describe("complete", () => {
    it("complete flag is true", () => {
      const state = reducer(initialState, actions.complete);
      expect(state.complete).toEqual(true);
    });
  });
});
