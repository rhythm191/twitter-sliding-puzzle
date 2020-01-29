import * as React from "react";
import { shallow } from "enzyme";
import { Commands } from "../Commands";

test("handleinitPieces", () => {
  const handleinitPiecesMock = jest.fn();
  const command = shallow(<Commands handleinitPieces={handleinitPiecesMock} />);
});
