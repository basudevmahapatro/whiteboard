import rough from "roughjs/bin/rough"
import { getArrowHeadsCoordinates, isPointCloseToLine } from "./math";
import  { getStroke } from "perfect-freehand"
import { ReceiptTurkishLiraIcon } from "lucide-react";

const gen = rough.generator();

export const isPointNearElement = (element, pointX, pointY) => {
  const { x1, y1, x2, y2, type } = element;
  const context = document.getElementById("canvas").getContext("2d");
  switch (type) {
    case "LINE":
    case "ARROW":
      return isPointCloseToLine(x1, y1, x2, y2, pointX, pointY);
    case "RECTANGLE":
    case "CIRCLE":
      return (
        isPointCloseToLine(x1, y1, x2, y1, pointX, pointY) ||
        isPointCloseToLine(x2, y1, x2, y2, pointX, pointY) ||
        isPointCloseToLine(x2, y2, x1, y2, pointX, pointY) ||
        isPointCloseToLine(x1, y2, x1, y1, pointX, pointY)
      );
    case "BRUSH":
      return context.isPointInPath(element.path, pointX, pointY);
    case "TEXT":
      context.font = `${element.size}px Caveat`;
      context.fillStyle = element.stroke;
      const textWidth = context.measureText(element.text).width;
      const textHeight = parseInt(element.size);
      context.restore();
      return (
        isPointCloseToLine(x1, y1, x1 + textWidth, y1, pointX, pointY) ||
        isPointCloseToLine(
          x1 + textWidth,
          y1,
          x1 + textWidth,
          y1 + textHeight,
          pointX,
          pointY
        ) ||
        isPointCloseToLine(
          x1 + textWidth,
          y1 + textHeight,
          x1,
          y1 + textHeight,
          pointX,
          pointY
        ) ||
        isPointCloseToLine(x1, y1 + textHeight, x1, y1, pointX, pointY)
      );
    default:
      throw new Error("Type not recognized");
  }
};

export const createRoughElement = (id, x1, y1, x2, y2, {type, stroke, fill, size}) => {
    const element = {
        id,
        x1,
        y1,
        x2,
        y2,
        type
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

        case "BRUSH": {
            const brushElement = {
                id,
                points : [ {x: x1, y: y1} ],
                path : new Path2D(getSvgPathFromStroke(getStroke(  [ {x: x1, y: y1} ] ))),
                stroke,
                type
            };
            return brushElement;
        }

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

        case "TEXT": {
            element.text = "";
            element.size = size;
            element.stroke = stroke;
            return element;
        }
    
        default: {
            throw new Error(`Type not recognised: ${type}`);
        }
    }
}

const average = (a, b) => (a + b) / 2

export function getSvgPathFromStroke(points, closed = true) {
  const len = points.length

  if (len < 4) {
    return ``
  }

  let a = points[0]
  let b = points[1]
  const c = points[2]

  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(
    2
  )},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`

  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i]
    b = points[i + 1]
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(
      2
    )} `
  }

  if (closed) {
    result += 'Z'
  }

  return result
}
