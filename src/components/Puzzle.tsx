/** @jsx jsx */
import React, { useCallback, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as puzzleActions from "@/actions/puzzle";
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

  // slide event
  const dispatch = useDispatch();
  const slideCallback = useCallback(
    (slideTo?: SlideTo) => slideTo && dispatch(pieseActions.slide(slideTo)),
    [pieces]
  );

  // canvas size
  const canvasEl = useRef(null);
  useEffect(() => {
    if (canvasEl.current) {
      const current: any = canvasEl.current;
      dispatch(
        puzzleActions.setCanvas({ width: current.offsetWidth, height: current.offsetHeight })
      );
    }

    function handleResizeCanvas(): void {
      const current: any = canvasEl.current;
      if (current) {
        const wrapperSize = {
          width: window.innerWidth <= current.offsetWidth ? window.innerWidth : current.offsetWidth,
          height:
            window.innerHeight <= current.offsetHeight ? window.innerHeight : current.offsetHeight,
        };

        dispatch(puzzleActions.setCanvas(wrapperSize));
      }
    }

    window.addEventListener("resize", handleResizeCanvas);

    return (): void => {
      window.removeEventListener("resize", handleResizeCanvas);
    };
  }, [canvasEl.current]);

  const piecesTags = pieces.pieces.map(piece => (
    <Piece key={piece.id} piece={piece} pieceSize={pieceSize} handleSlideTo={slideCallback} />
  ));

  const puzzleStyle = useMemo(
    () => css`
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      overflow: hidden;
      justify-self: stretch;

      > div {
        position: relative;
        margin: 0 auto;
        width: ${puzzle.canvas.width}px;
        max-width: 100%;
        height: 100%;
      }

      & .piece {
        background-image: url(${puzzle.imageUrl});
        background-size: ${puzzle.canvas.width}px ${puzzle.canvas.height}px;
      }
    `,
    [puzzle]
  );

  return (
    <div ref={canvasEl} css={puzzleStyle}>
      <div>{piecesTags}</div>
    </div>
  );
};

export default Puzzle;
