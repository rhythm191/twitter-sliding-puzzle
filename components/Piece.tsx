/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

type Props = {
  bgImage: string;
  bgX: number;
  bgY: number;
  x: number;
  y: number;
  pieceSize: {
    width: number;
    height: number;
  };
};

const Piece: React.FunctionComponent<Props> = props => {
  // const [posX, setPosX] = useState(props.x);

  return (
    <div
      css={css`
    box-sizing: border-box;
    position: absolute;
    background: url("${props.bgImage}") no-repeat;
    background-position: ${props.bgX}px ${props.bgY}px;
    background-size: 627px 839px;
    left: ${props.x * props.pieceSize.width}px;
    top: ${props.y * props.pieceSize.height}px;
    width: ${props.pieceSize.width}px;
    height: ${props.pieceSize.height}px;
    border: 2px solid #333;
    transition: all .5s ease-out;

    cursor: pointer;
  `}
    ></div>
  );
};

export default Piece;
