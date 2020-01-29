import { indexToPosition, positionToIndex } from "./position";

describe("indexToPosition", () => {
  test("index 0 => (0, 0)", () => {
    expect(indexToPosition(0, 9)).toEqual({ x: 0, y: 0 });
  });

  test("index 2 => (2, 0)", () => {
    expect(indexToPosition(2, 9)).toEqual({ x: 2, y: 0 });
  });

  test("index 3 => (0, 1)", () => {
    expect(indexToPosition(3, 9)).toEqual({ x: 0, y: 1 });
  });

  test("index 8 => (2, 2)", () => {
    expect(indexToPosition(8, 9)).toEqual({ x: 2, y: 2 });
  });
});

describe("positionToIndex", () => {
  test("(0, 0) => index 0", () => {
    expect(positionToIndex({ x: 0, y: 0 }, 9)).toEqual(0);
  });

  test("(2, 0) => index 2", () => {
    expect(positionToIndex({ x: 2, y: 0 }, 9)).toEqual(2);
  });

  test("(0, 1) => index 3", () => {
    expect(positionToIndex({ x: 0, y: 1 }, 9)).toEqual(3);
  });

  test("(2, 2) => index 8", () => {
    expect(positionToIndex({ x: 2, y: 2 }, 9)).toEqual(8);
  });
});
