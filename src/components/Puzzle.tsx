/** @jsx jsx */
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as pieseActions from "@/actions/pieces";
import { css, jsx } from "@emotion/core";
import Piece from "./Piece";
import { AppState } from "@/types/state";
import { SlideTo } from "@/types/piece";

const Puzzle: React.FunctionComponent = () => {
  const [puzzle, pieces] = useSelector((state: AppState) => [state.puzzle, state.pieces]);

  const pieceSize = {
    width: puzzle.canvas.width / Math.sqrt(pieces.pieceNum),
    height: puzzle.canvas.height / Math.sqrt(pieces.pieceNum),
  };

  const dispatch = useDispatch();
  const slideCallback = useCallback(
    (slideTo?: SlideTo) => slideTo && dispatch(pieseActions.slide(slideTo)),
    [pieces]
  );

  const piecesTags = pieces.pieces.map(piece => (
    <Piece key={piece.id} piece={piece} pieceSize={pieceSize} handleSlideTo={slideCallback} />
  ));

  const puzzleStyle = useMemo(
    () => css`
      position: relative;
      width: 100%;
      max-width: 100%;
      height: 90vh;
      & .piece {
        background-image: url(${puzzle.imageUrl});
        background-size: ${puzzle.canvas.width}px ${puzzle.canvas.height}px;
      }
    `,
    [puzzle]
  );

  return <div css={puzzleStyle}>{piecesTags}</div>;
};

export default Puzzle;
