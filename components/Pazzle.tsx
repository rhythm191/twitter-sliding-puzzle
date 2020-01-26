/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import Piece from "./Piece";

const puzzleStyle = css`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 90vh;
`;

type Props = {
  bgImage: string;
};

// 209 x 280
const Pazzle: React.FunctionComponent<Props> = ({ bgImage }) => {
  const positions = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      positions.push({ id: i * 100 + j, x: j, y: i });
    }
  }

  return (
    <div css={puzzleStyle}>
      {positions.map(position => (
        <Piece
          key={position.id}
          bgImage={bgImage}
          bgX={position.x * 209 * -1}
          bgY={position.y * 280 * -1}
          x={position.x}
          y={position.y}
          width={209}
          height={280}
        />
      ))}
    </div>
  );
};

export default Pazzle;
