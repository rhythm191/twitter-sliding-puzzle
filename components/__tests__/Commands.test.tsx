import * as React from "react";
import { shallow } from "enzyme";
import { Commands } from "../Commands";

test("handleinitPieces", () => {
  const handleinitPiecesMock = jest.fn();
  const command = shallow(
    <Commands
      handleDebugInit={() => {}}
      handleinitPieces={handleinitPiecesMock}
      handleRandom={() => {}}
    />
  );

  command
    .find("button")
    .at(1)
    .simulate("click");

  expect(handleinitPiecesMock.mock.calls.length).toBe(1);
});
