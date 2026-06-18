import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import rough from 'roughjs';
import boardContext from '../../store/board-context';
import toolboxContext from '../../store/toolbox-context';

function Board(){
    const canvasRef = useRef();
    const {elements, boardMouseDownHandler, boardMouseMoveHandler, currentActionType, boardMouseUpHandler}  = useContext(boardContext);
    const {toolboxState} = useContext(toolboxContext);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }, []);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.save();

        const roughCanvas = rough.canvas(canvas); 

        elements.forEach((element) => {
            roughCanvas.draw(element.roughEle);
        });

        return () => {
            context.clearRect(0,0,canvas.width,canvas.height);
        };
    }, [elements]);

    const handleMouseDown = (event) => {
        boardMouseDownHandler(event, toolboxState);
    };

    const handleMouseMove = (event) => {
        if(currentActionType=="DRAWING") boardMouseMoveHandler(event, toolboxState);
    };

    const handleMouseUp = () => {
        boardMouseUpHandler();
    };

    return (
    <div className='app'>
        <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}/>
    </div>
  )
}

export default Board;