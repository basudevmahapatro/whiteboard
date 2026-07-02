import {useContext} from 'react';
import classes from "./index.module.css"
import cx from "classnames"
import { Slash, RectangleHorizontal, Circle, MoveRight, Brush, Eraser, CaseSensitive, Undo, Redo, Download} from 'lucide-react';
import boardContext from '../../store/board-context';

const Toolbar = () => {
    const {activeToolItem, changeToolHandler, undoHandler, redoHandler, downloadClickHandler} = useContext(boardContext);
    return (
        <div className={classes.container}>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="BRUSH"})} onClick= {() => changeToolHandler("BRUSH")}><Brush/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="LINE"})} onClick= {() => changeToolHandler("LINE")}><Slash/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="RECTANGLE"})} onClick= {() => changeToolHandler("RECTANGLE")}><RectangleHorizontal/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="CIRCLE"})} onClick= {() => changeToolHandler("CIRCLE")}><Circle/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="ARROW"})} onClick= {() => changeToolHandler("ARROW")}><MoveRight/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="ERASER"})} onClick= {() => changeToolHandler("ERASER")}><Eraser/></div>
            <div className={cx(classes.toolItem, {[classes.active] : activeToolItem==="TEXT"})} onClick= {() => changeToolHandler("TEXT")}><CaseSensitive/></div>
            <div className={classes.toolItem} onClick= {() => undoHandler()}><Undo/></div>
            <div className={classes.toolItem} onClick= {() => redoHandler()}><Redo/></div>
            <div className={classes.toolItem} onClick= {() => downloadClickHandler()}><Download/></div>
        </div>
    );
};

export default Toolbar;