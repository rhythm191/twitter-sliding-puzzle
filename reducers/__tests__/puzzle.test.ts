import { puzzleReducer as reducer } from "../puzzle";
import * as actions from "../../actions/puzzle";

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
  complete: false,
};

describe("complete", () => {
  test("complete flag is true", () => {
    const state = reducer(initialState, actions.complete);
    expect(state.complete).toEqual(true);
  });
});
