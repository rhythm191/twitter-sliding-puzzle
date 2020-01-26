// パズルピースのインターフェース

export interface Position {
  x: number;
  y: number;
}

export interface Piece {
  id: string;
  originPosition: Position;
  position: Position;
  missing: boolean;
  slideTo: number | undefined;
}
