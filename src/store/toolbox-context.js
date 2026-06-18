import { createContext } from "react";

const toolboxContext = createContext ({ 
    toolboxState : {},
    changeStrokeHandler: () => {},
    changeFillHandler: () => {},
    changeStrokeWidthHandler : () => {},
}
);

export default toolboxContext;