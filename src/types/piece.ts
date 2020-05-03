// パズルピースのインターフェース

export interface Position {
  x: number;
  y: number;
}

export interface SlideTo {
  src: number;
  dest: number;
}

export interface Piece {
  id: string;
  originPosition: Position;
  position: Position;
  missing: boolean;
  slideTo?: SlideTo;
}
