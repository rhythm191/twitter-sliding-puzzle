/** @jsx jsx */
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as puzzleActions from "../actions/puzzle";
import * as pieseActions from "../actions/pieces";
import { css, jsx } from "@emotion/core";
import Piece from "./Piece";
import { AppState } from "../store";
import { PazzuleState } from "../reducers/puzzle";
import { SlideTo } from "../types/piece";

const mapStateToProps = (state: AppState): AppState => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleSetImage: (imageUrl: string) => dispatch(puzzleActions.setImage(imageUrl)),
    handleSlideTo: (slideTo: SlideTo) => dispatch(pieseActions.slide(slideTo)),
  };
};

interface PuzzleHandler {
  handleSetImage(imageUrl: string): void;
  handleSlideTo(slideTo: SlideTo): void;
}

type Props = AppState & PuzzleHandler;

const puzzleStyle = (puzzle: PazzuleState) => css`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 90vh;
  & .piece {
    background-image: url(${puzzle.imageUrl});
    background-size: ${puzzle.canvas.width}px ${puzzle.canvas.height}px;
  }
`;

const Pazzle: React.FunctionComponent<Props> = ({ puzzle, pieces, handleSlideTo }) => {
  const pieceSize = {
    width: puzzle.canvas.width / Math.sqrt(pieces.pieceNum),
    height: puzzle.canvas.height / Math.sqrt(pieces.pieceNum),
  };

  const piecesTags = pieces.pieces.map(piece => (
    <Piece key={piece.id} piece={piece} pieceSize={pieceSize} handleSlideTo={handleSlideTo} />
  ));

  return <div css={puzzleStyle(puzzle)}>{piecesTags}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Pazzle);
