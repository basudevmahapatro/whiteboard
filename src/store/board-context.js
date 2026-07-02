import { createContext } from "react";

const boardContext = createContext({
    activeToolItem : "",
    currentActionType : "",
    elements : [],
    changeToolHandler : () => {},
    boardMouseDownHandler: () => {},
    boardMouseMoveHandler: () => {},
    boardMouseUpHandler: () => {},
    textAreaBlurHandler: () => {},
    undo: () => {},
    redo: () => {},
    history : [[]],
    index: 0
})

export default boardContext;



