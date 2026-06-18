import { useReducer, useState } from "react";
import boardContext from "./board-context"
import rough from "roughjs/bin/rough"
import { createRoughElement } from "../utils/element";

const gen = rough.generator();

const initialBoardState = {
    activeToolItem: "LINE",
    currentActionType: "NONE",
    elements : []
}

const boardReducer = (state, action) => {
    switch (action.type){
        case "CHANGE_TOOL": {
            return {...state, activeToolItem : action.payload.toolItem}
        }  

        case "DRAW_DOWN": {
            const {clientX,clientY,stroke,fill, size} = action.payload;
            const newElement = createRoughElement(state.elements.length, clientX, clientY, clientX, clientY, {
                type: state.activeToolItem,
                stroke,
                fill,
                size
            });
            const prevElements = state.elements;
            return {...state, currentActionType: "DRAWING", elements: [...prevElements, newElement]};
        } 
            
        case "DRAW_MOVE": {
            const {clientX, clientY,stroke,fill, size} = action.payload;
            const newElements = [...state.elements];
            const index = state.elements.length-1;
            newElements[index] = createRoughElement(
                index,
                newElements[index].x1,
                newElements[index].y1,
                clientX,
                clientY,
                {
                    type: state.activeToolItem,
                    stroke,
                    fill,
                    size
                }
            );

            return {...state, elements: newElements};
        }

        case "DRAW_UP": {
            return {...state, currentActionType: "NONE"};
        }
        
        default :
            return state; 
    }
};

const BoardProvider = ({ children }) => {
    // const [activeToolItem, setActiveToolItem]  = useState("LINE");
    // const [elements, setElements] = useState([]);
    const [boardState, dispatchBoardAction] = useReducer(boardReducer, initialBoardState);

    const changeToolHandler = (toolItem) => {
        dispatchBoardAction({
            type: "CHANGE_TOOL",
            payload : {
                toolItem
            }
    });
    }

    const boardMouseDownHandler = (event, toolboxState)=> {
        const {clientX, clientY} = event;
        dispatchBoardAction({
            type : "DRAW_DOWN",
            payload : {
                clientX,
                clientY,
                stroke : toolboxState[boardState.activeToolItem]?.stroke,
                fill : toolboxState[boardState.activeToolItem]?.fill,
                size : toolboxState[boardState.activeToolItem]?.size,
            }
        });
    };

    const boardMouseMoveHandler = (event, toolboxState) => {
        const {clientX, clientY} = event;
        dispatchBoardAction({
            type : "DRAW_MOVE",
            payload : {
                clientX,
                clientY,
                stroke : toolboxState[boardState.activeToolItem]?.stroke,
                fill : toolboxState[boardState.activeToolItem]?.fill,
                size : toolboxState[boardState.activeToolItem]?.size,
            }
        });
    };

    const boardMouseUpHandler = ()=> {
        dispatchBoardAction({
            type : "DRAW_UP"
        });
    };

    const boardContextValue = {
        activeToolItem: boardState.activeToolItem,
        currentActionType: boardState.currentActionType,        
        changeToolHandler,
        elements: boardState.elements,
        boardMouseDownHandler,
        boardMouseMoveHandler,
        boardMouseUpHandler,
    }

    return (
        <boardContext.Provider value={boardContextValue}>
            {children}
        </boardContext.Provider>
    );
};

export default BoardProvider;