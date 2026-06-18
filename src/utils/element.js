import rough from "roughjs/bin/rough"
import { getArrowHeadsCoordinates } from "./math";
const gen = rough.generator();

export const createRoughElement = (id, x1, y1, x2, y2, {type, stroke, fill, size}) => {
    const element = {
        id,
        x1,
        y1,
        x2,
        y2
    };

    let options = {
        seed : id+1,
    }

    if(stroke) options.stroke = stroke;
    if(size) options.strokeWidth = Math.max(1, Math.min(10, ((size) / 100) * (9) + 1));
    if(fill){
         options.fill = fill;
         options.fillStyle = "solid";
    }

    switch (type) {
        case "LINE": {
            element.roughEle = gen.line( x1, y1, x2, y2, options);
            return element;
        }

        case "RECTANGLE": {
            element.roughEle = gen.rectangle( x1, y1, x2-x1, y2-y1, options);
            return element;
        }

        case "CIRCLE": {
            element.roughEle = gen.ellipse((x1+x2)/2, (y1+y2)/2, x2-x1, y2-y1, options);
            return element;
        }

        case "ARROW": {
            const arrowLength = Math.floor(0.1 * Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) ));
            const {x3,y3,x4,y4} = getArrowHeadsCoordinates(x1,y1,x2,y2,arrowLength);
            element.roughEle = gen.linearPath([[x1,y1], [x2,y2], [x4,y4], [x2,y2], [x3,y3]], options);
            return element;
        }
    
        default: {
            throw new Error(`Type not recognised: ${type}`);
        }
    }
}

