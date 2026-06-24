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
})

export default boardContext;



