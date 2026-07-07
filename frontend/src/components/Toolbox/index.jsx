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
            {STROKE_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolBoxLabel}>Stroke Color</div>
          <div className={classes.colorsContainer}>
            <div>
              <input
                className={classes.colorPicker}
                type="color"
                value={strokeColour}
                onChange={(e) => changeStrokeHandler(activeToolItem, e.target.value)}
              ></input>
            </div>
             {Object.keys(COLORS).map((color) => (
                            <div
                                key={color}
                                className={cx(classes.colorBox, {[classes.activeColorBox] : strokeColour===COLORS[color]})}
                                style={{ backgroundColor: COLORS[color] }}
                                onClick={() => changeStrokeHandler(activeToolItem, COLORS[color])}
                            />
             ))}
          </div>
        </div>
      )}
             {FILL_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}> 
                <div className={classes.toolBoxLabel}>Fill Colour</div>
                    <div className={classes.colorsContainer}> 
                      {fillColour === null ? (
                            <div
                                className={cx(classes.colorPicker, classes.noFillColorBox)}
                                onClick={() => changeFill(activeToolItem, COLORS.BLACK)}
                            ></div>
                            ) : (
                            <div>
                                <input
                                className={classes.colorPicker}
                                type="color"
                                value={strokeColour}
                                onChange={(e) => changeFill(activeToolItem, e.target.value)}
                                ></input>
                            </div>
                            )}
                            <div
                            className={cx(classes.colorBox, classes.noFillColorBox, {
                                [classes.activeColorBox]: fillColour === null,
                            })}
                            onClick={() => changeFillHandler(activeToolItem, null)}
                        ></div>
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