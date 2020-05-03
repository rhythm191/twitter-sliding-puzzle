import { Piece } from "./piece";

// Pieces state
export interface PiecesState {
  pieceNum: number;
  pieces: Piece[];
  indexes: number[];
}

// Puzzle state
export interface PuzzleState {
  imageUrl: string;
  imageSize: {
    width: number;
    height: number;
  };
  canvas: {
    width: number;
    height: number;
  };
  complete: boolean;
}

export type AppState = {
  puzzle: PuzzleState;
  pieces: PiecesState;
};
