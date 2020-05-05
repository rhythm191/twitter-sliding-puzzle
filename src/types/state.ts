import { Piece } from "./piece";

// Pieces state
export interface PiecesState {
  pieceNum: number;
  pieces: Piece[];
  indexes: number[];
}

export interface ElementSize {
  width: number;
  height: number;
}

// Puzzle state
export interface PuzzleState {
  imageUrl: string;
  imageSize: ElementSize;
  wrapperSize: ElementSize;
  canvas: ElementSize;
  complete: boolean;
}

export type AppState = {
  puzzle: PuzzleState;
  pieces: PiecesState;
};
