/** @jsx jsx */
import React, { useCallback } from "react";
import { css, jsx } from "@emotion/core";

import { Action } from "typescript-fsa";
import { Piece as PieceType, SlideTo } from "../types/piece";

const baseStyle = css`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #ccc;
  transition: transform 0.2s ease-out;
  z-index: 10;

  &.piece--missing {
    transition: none;
    background: none;
    border: none;
    z-index: 0;
  }

  &.piece--slidable {
    cursor: pointer;

    &:hover {
      filter: invert(20%);
    }
  }
`;

type Props = {
  piece: PieceType;
  pieceSize: {
    width: number;
    height: number;
  };
  handleSlideTo: (slideTo?: SlideTo) => Action<SlideTo> | undefined;
};

export const Piece: React.FunctionComponent<Props> = ({ piece, pieceSize, handleSlideTo }) => {
  const bgX = piece.originPosition.x * pieceSize.width * -1;
  const bgY = piece.originPosition.y * pieceSize.height * -1;

  let className = "piece";
  if (piece.missing) className += " piece--missing";
  if (piece.slideTo) className += " piece--slidable";

  const clickCallback = useCallback(() => handleSlideTo(piece.slideTo), [piece]);

  return (
    <div
      className={className}
      css={css`
        ${baseStyle};
        background-position: ${bgX}px ${bgY}px;
        transform: translate(
          ${piece.position.x * pieceSize.width}px,
          ${piece.position.y * pieceSize.height}px
        );
        width: ${pieceSize.width}px;
        height: ${pieceSize.height}px;
      `}
      onClick={clickCallback}
    ></div>
  );
};

export default Piece;
