// ポジション系のutil関数
import { Position } from "@/types/piece";

export function verticalNumber(index: number, puzzleSize: number): number {
  return Math.floor(index / Math.sqrt(puzzleSize));
}

export function horizontalNumber(index: number, puzzleSize: number): number {
  return index % Math.sqrt(puzzleSize);
}

export function indexToPosition(index: number, puzzleSize: number): Position {
  return {
    x: horizontalNumber(index, puzzleSize),
    y: verticalNumber(index, puzzleSize),
  };
}

export function positionToIndex(position: Position, puzzleSize: number): number {
  return position.x + position.y * Math.sqrt(puzzleSize);
}
