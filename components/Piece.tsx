/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Piece, SlideTo } from "../types/piece";

const baseStyle = css`
  box-sizing: border-box;
  position: absolute;
  border: 2px solid #ccc;
  transition: left 0.2s ease-out, top 0.2s ease-out;
  z-index: 10;

  &.piece--missing {
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
  piece: Piece;
  pieceSize: {
    width: number;
    height: number;
  };
  handleSlideTo: (slideTo: SlideTo) => void | undefined;
};

const Component: React.FunctionComponent<Props> = ({ piece, pieceSize, handleSlideTo }) => {
  const bgX = piece.originPosition.x * pieceSize.width * -1;
  const bgY = piece.originPosition.y * pieceSize.height * -1;

  let className = "piece";
  if (piece.missing) className += " piece--missing";
  if (piece.slideTo) className += " piece--slidable";

  return (
    <div
      className={className}
      css={css`
        ${baseStyle};
        background-position: ${bgX}px ${bgY}px;
        left: ${piece.position.x * pieceSize.width}px;
        top: ${piece.position.y * pieceSize.height}px;
        width: ${pieceSize.width}px;
        height: ${pieceSize.height}px;
      `}
      onClick={() => piece.slideTo && handleSlideTo(piece.slideTo)}
    ></div>
  );
};

export default Component;
