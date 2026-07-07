import { createContext } from "react";

const boardContext = createContext({
    activeToolItem : "",
    currentActionType : "",
    elements : [],
    changeToolHandler : () => {},
    boardMouseDownHandler: () => {},
    boardMouseMoveHandler: () => {},
    boardMouseUpHandler: () => {},
    downloadClickHandler: () => {},
    textAreaBlurHandler: () => {},
    undoHandler: () => {},
    redoHandler: () => {},
    history : [[]],
    index: 0
})

export default boardContext;



