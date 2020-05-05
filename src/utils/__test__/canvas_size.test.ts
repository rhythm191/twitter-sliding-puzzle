import { calcCanvasSize } from "../canvas_size";

describe("calcCanvasSize", () => {
  it("img smaller than canvas", () => {
    expect(calcCanvasSize({ width: 50, height: 50 }, { width: 100, height: 100 })).toEqual({
      width: 50,
      height: 50,
    });
  });

  it("img width larger than canvas", () => {
    expect(calcCanvasSize({ width: 200, height: 50 }, { width: 100, height: 100 })).toEqual({
      width: 100,
      height: 25,
    });
  });

  it("img height larger than canvas", () => {
    expect(calcCanvasSize({ width: 50, height: 200 }, { width: 100, height: 100 })).toEqual({
      width: 25,
      height: 100,
    });
  });

  it("img larger than canvas", () => {
    expect(calcCanvasSize({ width: 200, height: 200 }, { width: 100, height: 100 })).toEqual({
      width: 100,
      height: 100,
    });
  });

  it("img height more larger than canvas", () => {
    expect(calcCanvasSize({ width: 200, height: 400 }, { width: 100, height: 100 })).toEqual({
      width: 50,
      height: 100,
    });
  });
});
