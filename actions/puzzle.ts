import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("puzzle");

export const setImage = actionCreator<string>("SET_IMAGE");
