/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

type Props = {
  bgImage: string;
  bgX: number;
  bgY: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const Piece: React.FunctionComponent<Props> = props => {
  const [posX, setPosX] = useState(props.x);

  return (
    <div
      css={css`
    box-sizing: border-box;
    position: absolute;
    background: url("${props.bgImage}") no-repeat;
    background-position: ${props.bgX}px ${props.bgY}px;
    background-size: 627px 839px;
    left: ${posX * props.width}px;
    top: ${props.y * props.height}px;
    width: ${props.width}px;
    height: ${props.height}px;
    border: 2px solid #333;
    transition: all .5s ease-out;

    cursor: pointer;
  `}
      onClick={() => setPosX(x => x + 1)}
    ></div>
  );
};

export default Piece;
