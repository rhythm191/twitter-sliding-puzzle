import * as React from "react";
// import { useDispatch } from "react-redux";
import { shallow } from "enzyme";
import { Commands } from "@/components/Commands";
import * as actions from "@/actions/puzzle";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => mockDispatch,
}));

describe("Commands", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("handleDebugInit", () => {
    const command = shallow(<Commands />);

    const button = command.find("button").at(0);
    button.simulate("click");

    expect(button.text()).toBe("デバッグ初期化");
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(actions.debugInit());
  });

  it("handleinitPieces", () => {
    const command = shallow(<Commands />);

    const button = command.find("button").at(1);
    button.simulate("click");

    expect(button.text()).toBe("初期化");
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(actions.init());
  });

  it("handleinitPieces", () => {
    const command = shallow(<Commands />);

    const button = command.find("button").at(2);
    button.simulate("click");

    expect(button.text()).toBe("ランダム");
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(actions.setRandom());
  });
});
