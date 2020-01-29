import * as React from "react";
import { shallow } from "enzyme";
import { Piece } from "../Piece";

test("handleDebugInit", () => {
  const handleSlideTotMock = jest.fn();
  const piece = {
    originPosition: {
      x: 0,
      y: 0,
    },
    position: {
      x: 0,
      y: 0,
    },
    missing: false,
    slideTo: {
      src: 0,
      dest: 1,
    },
  };

  const pieceSize = {
    width: 30,
    height: 30,
  };

  const command = shallow(
    <Piece piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTotMock} />
  );

  const button = command.find("div");
  button.simulate("click");

  // expect(button.w).toBe("デバッグ初期化");
  expect(handleSlideTotMock.mock.calls.length).toBe(1);
});
