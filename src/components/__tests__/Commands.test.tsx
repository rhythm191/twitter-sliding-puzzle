import * as React from "react";
import { useDispatch } from "react-redux";
import { shallow } from "enzyme";
import { Commands } from "@/components/Commands";

jest.mock("@/actions/puzzle");
jest.mock("react-redux");
const useDispatchMock = useDispatch as jest.Mock;

test("handleDebugInit", () => {
  const handleDebugInitMock = jest.fn();
  useDispatchMock.mockReturnValue(handleDebugInitMock);
  const command = shallow(<Commands />);

  const button = command.find("button").at(0);
  button.simulate("click");

  expect(button.text()).toBe("デバッグ初期化");
  expect(handleDebugInitMock.mock.calls.length).toBe(1);
});

test("handleinitPieces", () => {
  const handleinitPiecesMock = jest.fn();
  useDispatchMock.mockReturnValue(handleinitPiecesMock);
  const command = shallow(<Commands />);

  const button = command.find("button").at(1);
  button.simulate("click");

  expect(button.text()).toBe("初期化");
  expect(handleinitPiecesMock.mock.calls.length).toBe(1);
});

test("handleinitPieces", () => {
  const handleRandomMock = jest.fn();
  useDispatchMock.mockReturnValue(handleRandomMock);
  const command = shallow(<Commands />);

  const button = command.find("button").at(2);
  button.simulate("click");

  expect(button.text()).toBe("ランダム");
  expect(handleRandomMock.mock.calls.length).toBe(1);
});
