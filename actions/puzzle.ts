import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("puzzle");

export const setImage = actionCreator<string>("SET_IMAGE");
export const init = actionCreator("INIT");
export const setRandom = actionCreator("SET_RANDOM");
