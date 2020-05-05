import actionCreatorFactory from "typescript-fsa";
import { ElementSize } from "@/types/state";

const actionCreator = actionCreatorFactory("puzzle");

export const setImage = actionCreator<string>("SET_IMAGE");
export const init = actionCreator("INIT");
export const debugInit = actionCreator("DEUBG_INIT");
export const setRandom = actionCreator("SET_RANDOM");
export const setCanvas = actionCreator<ElementSize>("SET_CANVAS");
export const complete = actionCreator("COMPLETE");
