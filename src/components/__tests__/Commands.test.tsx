import * as React from "react";
import { shallow } from "enzyme";
import { Commands } from "@/components/Commands";

test("handleDebugInit", () => {
  const handleDebugInitMock = jest.fn();
  const command = shallow(
    <Commands
      handleDebugInit={handleDebugInitMock}
      handleinitPieces={() => {}}
      handleRandom={() => {}}
    />
  );

  const button = command.find("button").at(0);
  button.simulate("click");

  expect(button.text()).toBe("デバッグ初期化");
  expect(handleDebugInitMock.mock.calls.length).toBe(1);
});

test("handleinitPieces", () => {
  const handleinitPiecesMock = jest.fn();
  const command = shallow(
    <Commands
      handleDebugInit={() => {}}
      handleinitPieces={handleinitPiecesMock}
      handleRandom={() => {}}
    />
  );

  const button = command.find("button").at(1);
  button.simulate("click");

  expect(button.text()).toBe("初期化");
  expect(handleinitPiecesMock.mock.calls.length).toBe(1);
});

test("handleinitPieces", () => {
  const handleRandomMock = jest.fn();
  const command = shallow(
    <Commands
      handleDebugInit={() => {}}
      handleinitPieces={() => {}}
      handleRandom={handleRandomMock}
    />
  );

  const button = command.find("button").at(2);
  button.simulate("click");

  expect(button.text()).toBe("ランダム");
  expect(handleRandomMock.mock.calls.length).toBe(1);
});
