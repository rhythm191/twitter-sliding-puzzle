/** @jsx jsx */
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/puzzle";
import { css, jsx } from "@emotion/core";
import Piece from "./Piece";
import { AppState } from "../store";
import { PazzuleState } from "../reducers/puzzle";

const mapStateToProps = (state: AppState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleSetImage: (imageUrl: string) => dispatch(actions.setImage(imageUrl)),
  };
};

interface PuzzleHandler {
  handleSetImage(imageUrl: string): void;
}

type Props = AppState & PuzzleHandler;

const puzzleStyle = (puzzle: PazzuleState) => css`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 90vh;
  & div {
    background-image: url(${puzzle.imageUrl});
    background-size: ${puzzle.canvas.width}px ${puzzle.canvas.height}px;
  }
`;

const Pazzle: React.FunctionComponent<Props> = ({ puzzle, pieces }) => {
  const pieceSize = {
    width: puzzle.canvas.width / Math.sqrt(pieces.pieceNum),
    height: puzzle.canvas.height / Math.sqrt(pieces.pieceNum),
  };

  const piecesTags = pieces.pieces.map(piece => (
    <Piece key={piece.id} piece={piece} pieceSize={pieceSize} />
  ));

  return <div css={puzzleStyle(puzzle)}>{piecesTags}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Pazzle);
