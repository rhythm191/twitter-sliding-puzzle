import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("piece");

export const initPieces = actionCreator("INIT_PIECES");
export const grantSlidable = actionCreator("GRANT_SLIDABLE");
// export const grantSlidable = actionCreator("GRANT_SLIDABLE");
export const random = actionCreator("RANDOM");
export const debugRandom = actionCreator("DEBUG_RANDOM");
export const resetSlideGrant = actionCreator("RESET_SLIDE_GRANT");
export const swap = actionCreator<{ src: number; dest: number }>("SWAP");
export const slide = actionCreator<{ src: number; dest: number }>("SLIDE");
export const complete = actionCreator("COMPLETE");
