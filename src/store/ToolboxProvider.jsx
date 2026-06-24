import { useReducer, useEffect   } from "react";
import toolboxContext from "./toolbox-context"
import { COLORS } from "../constants";

const toolboxReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STROKE": {
            return {...state, [action.payload.tool] : {
                ...state[action.payload.tool],
                stroke : action.payload.stroke
            }};
        }

        case "CHANGE_FILL": {
            return {...state, [action.payload.tool] : {
                ...state[action.payload.tool],
                fill : action.payload.fill
            }};
        }

        case "CHANGE_STROKE_WIDTH": {
            return {...state, [action.payload.tool] : {
                ...state[action.payload.tool],
                size : action.payload.size
            }};
        }

        default:
            return state;
    }
};

const initialToolboxState = {
    LINE : {
        stroke : COLORS.BLACK,
        size : "1"
    },
    RECTANGLE : {
        stroke : COLORS.BLACK,
        fill : null,
        size : "1"
    },
    CIRCLE : {
        stroke : COLORS.BLACK,
        fill : null,
        size : "1"
    },
    ARROW : {
        stroke : COLORS.BLACK,
        size : "1"
    },
    BRUSH : {
        stroke : COLORS.BLACK,
        size : "1"
    },
    TEXT : {
        stroke : COLORS.BLACK,
        size : "16"
    }
}

const ToolboxProvider = ({children}) => {
    const [toolboxState, dispatchToolboxAction] = useReducer(toolboxReducer, initialToolboxState);

    const changeStrokeHandler = (tool, stroke) => {
       dispatchToolboxAction({
            type: "CHANGE_STROKE",
            payload : {
                tool,
                stroke
            }
        });
    };

    const changeFillHandler = (tool, fill) => {
       dispatchToolboxAction({
            type: "CHANGE_FILL",
            payload : {
                tool,
                fill
            }
        });
    };

    const changeStrokeWidthHandler = (tool, size) => {
        dispatchToolboxAction({
             type: "CHANGE_STROKE_WIDTH",
             payload : {
                tool,
                size
             }
        });
    }

    const toolboxContextValue = {
        toolboxState,
        changeStrokeHandler,
        changeFillHandler,
        changeStrokeWidthHandler
    };

    return (
        <toolboxContext.Provider value={toolboxContextValue}>
            {children}
        </toolboxContext.Provider>
    ); 
};

export default ToolboxProvider;