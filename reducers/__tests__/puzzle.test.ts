import { puzzleReducer as reducer } from "../puzzle";
import { PuzzleState } from "../../types/state";
import * as actions from "../../actions/puzzle";

const initialState: PuzzleState = {
  imageUrl: "http://localhost:3000/sample.jpeg",
  imageSize: {
    width: 1536,
    height: 2048,
  },
  canvas: {
    width: 627,
    height: 840,
  },
  complete: false,
};

describe("complete", () => {
  it("complete flag is true", () => {
    const state = reducer(initialState, actions.complete);
    expect(state.complete).toEqual(true);
  });
});
