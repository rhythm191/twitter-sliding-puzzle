import * as React from "react";
import { shallow } from "enzyme";
import { Piece } from "../Piece";

describe("Piece", () => {
  const handleSlideTotMock = jest.fn();

  const pieceSize = {
    width: 30,
    height: 30,
  };

  it("has piece class exists", () => {
    const piece = {
      id: "abc",
      originPosition: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      missing: false,
      slideTo: undefined,
    };

    const wrapper = shallow(
      <Piece piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTotMock} />
    );

    expect(wrapper.find(".piece").length).toBe(1);
  });

  it("has have piece-missing class when missing piece", () => {
    const piece = {
      id: "abc",
      originPosition: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      missing: true,
      slideTo: undefined,
    };

    const wrapper = shallow(
      <Piece piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTotMock} />
    );

    expect(wrapper.find(".piece--missing").length).toBe(1);
  });

  it("has have piece-slidable class when missing piece", () => {
    const piece = {
      id: "abc",
      originPosition: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      missing: true,
      slideTo: {
        src: 0,
        dest: 1,
      },
    };

    const wrapper = shallow(
      <Piece piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTotMock} />
    );

    expect(wrapper.find(".piece--slidable").length).toBe(1);
  });

  it("handle method fire when click", () => {
    const piece = {
      id: "abc",
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

    const wrapper = shallow(
      <Piece piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTotMock} />
    );

    wrapper.find(".piece").simulate("click");
    expect(handleSlideTotMock.mock.calls.length).toBe(1);
  });
});
