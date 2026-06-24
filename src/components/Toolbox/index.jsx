import { useContext } from "react";
import { COLORS, FILL_TOOL_TYPES, SIZE_TOOL_TYPES, STROKE_TOOL_TYPES } from "../../constants";
import classes from "./index.module.css"
import toolboxContext from "../../store/toolbox-context";
import boardContext from "../../store/board-context";
import cx from "classnames"

const Toolbox = () => {
    const {activeToolItem} = useContext(boardContext);
    const {toolboxState, changeStrokeHandler, changeFillHandler, changeStrokeWidthHandler} = useContext(toolboxContext);
    const strokeColour = toolboxState[activeToolItem]?.stroke;
    const fillColour = toolboxState[activeToolItem]?.fill;

    return (
        <div className={classes.container}>
            {STROKE_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}> 
                <div className={classes.toolBoxLabel}>Stroke</div>
                    <div className={classes.colorsContainer}> 
                        {Object.keys(COLORS).map((color) => (
                            <div
                                key={color}
                                className={cx(classes.colorBox, {[classes.activeColorBox] : strokeColour===COLORS[color]})}
                                style={{ backgroundColor: COLORS[color] }}
                                onClick={() => changeStrokeHandler(activeToolItem, COLORS[color])}
                            />
                        ))}
                    </div>
            </div>}
             {FILL_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}> 
                <div className={classes.toolBoxLabel}>Fill Colour</div>
                    <div className={classes.colorsContainer}> 
                        {Object.keys(COLORS).map((color) => (
                            <div
                                key={color}
                                className={cx(classes.colorBox, {[classes.activeColorBox] : fillColour===COLORS[color]})}
                                style={{ backgroundColor: COLORS[color] }}
                                onClick={() => changeFillHandler(activeToolItem, COLORS[color])}
                            />
                        ))}
                    </div>
            </div>}

            {SIZE_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}> 
                <div className={classes.toolBoxLabel}>{activeToolItem === "TEXT" ? "Font Size" : "Stroke Width"}</div>
                <input type="range" min={activeToolItem === "TEXT" ? 16 : 1} value={toolboxState[activeToolItem].size} onChange={() => changeStrokeWidthHandler(activeToolItem, event.target.value)}/>
            </div>}
        </div>
    );
};

export default Toolbox;