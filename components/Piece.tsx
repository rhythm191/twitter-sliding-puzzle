/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Piece } from "../types/piece";

type Props = {
  piece: Piece;
  pieceSize: {
    width: number;
    height: number;
  };
};

const Component: React.FunctionComponent<Props> = ({ piece, pieceSize }) => {
  const bgX = piece.originPosition.x * pieceSize.width * -1;
  const bgY = piece.originPosition.y * pieceSize.height * -1;

  return (
    <div
      css={css`
        box-sizing: border-box;
        position: absolute;
        background-position: ${bgX}px ${bgY}px;
        left: ${piece.position.x * pieceSize.width}px;
        top: ${piece.position.y * pieceSize.height}px;
        width: ${pieceSize.width}px;
        height: ${pieceSize.height}px;
        border: 2px solid #333;
        transition: all 0.5s ease-out;

        cursor: pointer;
      `}
    ></div>
  );
};

export default Component;
