/** @jsx jsx */
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/puzzle";
import { css, jsx } from "@emotion/core";
import Piece from "./Piece";
import { AppState } from "../store";
import { indexToPosition } from "../utils/position";

const puzzleStyle = css`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 90vh;
`;

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

// 209 x 280
const Pazzle: React.FunctionComponent<Props> = ({ puzzle, pieces }) => {
  const pieceSize = {
    width: puzzle.canvas.width / Math.sqrt(pieces.pieceNum),
    height: puzzle.canvas.height / Math.sqrt(pieces.pieceNum),
  };

  const piecesTags = pieces.pieces.map((piece, index) => {
    // console.log(piece);
    const position = indexToPosition(index, pieces.pieceNum);

    return (
      <Piece
        key={piece.id}
        bgImage={puzzle.imageUrl}
        bgX={piece.originPosition.x * pieceSize.width * -1}
        bgY={piece.originPosition.y * pieceSize.height * -1}
        x={position.x}
        y={position.y}
        pieceSize={pieceSize}
      />
    );
  });

  return <div css={puzzleStyle}>{piecesTags}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Pazzle);
