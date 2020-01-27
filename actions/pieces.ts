import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("piece");

export const initPieces = actionCreator("INIT_PIECES");
export const grantSlidable = actionCreator("GRANT_SLIDABLE");
// export const grantSlidable = actionCreator("GRANT_SLIDABLE");
export const random = actionCreator("RANDOM");
export const slide = actionCreator<{ src: number; dest: number }>("SLIDE");
