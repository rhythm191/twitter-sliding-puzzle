import { piecesReducer as reducer } from "../piece";
import * as actions from "../../actions/pieces";
import deepEqual from "deep-equal";

describe("initPieces", () => {
  describe("piece size", () => {
    test("piece size is 9", () => {
      const state = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);
      expect(state.pieces.length).toEqual(9);
    });

    test("piece size is 16", () => {
      const state = reducer({ pieceNum: 16, pieces: [] }, actions.initPieces);
      expect(state.pieces.length).toEqual(16);
    });
  });

  describe("initial state is", () => {
    const state = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);

    test("original position equal position", () => {
      expect(state.pieces.every(piece => deepEqual(piece.originPosition, piece.position))).toEqual(
        true
      );
    });
    test("missing is false", () => {
      expect(state.pieces.every(piece => piece.missing === false)).toEqual(true);
    });

    test("slideTo is undefined", () => {
      expect(state.pieces.every(piece => piece.slideTo === undefined)).toEqual(true);
    });
  });
});

describe("random", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);

  test("exists missing piece", () => {
    const state = reducer(initialState, actions.random);
    expect(state.pieces.findIndex(piece => piece.missing)).not.toEqual(-1);
  });
});

describe("debugRandom", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);

  test("index 0 is missing", () => {
    const state = reducer(initialState, actions.debugRandom);
    expect(state.pieces[0].missing).toEqual(true);
  });
});

describe("resetSlideGrant", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);

  test("all slideTo is undefined", () => {
    const state = reducer(initialState, actions.resetSlideGrant);
    expect(state.pieces.every(piece => piece.slideTo === undefined)).toEqual(true);
  });
});

describe("grantSlidable", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);
  const debugState = reducer(initialState, actions.debugRandom);

  test("index 1 is slidable", () => {
    const state = reducer(debugState, actions.grantSlidable);
    expect(state.pieces[1].slideTo).toEqual({ src: 1, dest: 0 });
  });

  test("index 3 is slidable", () => {
    const state = reducer(debugState, actions.grantSlidable);
    expect(state.pieces[3].slideTo).toEqual({ src: 3, dest: 0 });
  });
});

describe("swap", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);
  const debugState = reducer(initialState, actions.debugRandom);

  test("index 0 is original position", () => {
    const state = reducer(debugState, actions.swap({ src: 1, dest: 0 }));
    const piece0 = state.pieces[0];

    expect(deepEqual(piece0.originPosition, piece0.position)).toEqual(true);
  });

  test("index 1 is original position", () => {
    const state = reducer(debugState, actions.swap({ src: 1, dest: 0 }));
    const piece1 = state.pieces[1];

    expect(deepEqual(piece1.originPosition, piece1.position)).toEqual(true);
  });
});

describe("complete", () => {
  const initialState = reducer({ pieceNum: 9, pieces: [] }, actions.initPieces);
  const debugState = reducer(initialState, actions.debugRandom);
  const completeState = reducer(debugState, actions.swap({ src: 1, dest: 0 }));

  test("missing piece is not exist", () => {
    const state = reducer(completeState, actions.complete);
    expect(state.pieces.every(piece => piece.missing === false)).toEqual(true);
  });
});
