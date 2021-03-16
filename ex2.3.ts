import { makePair, getHead, getTail, makePoint, Point } from "./ex2.2";

type Size = [number, number];

type Rectangle = [Point, Size];

const makeSize = (width: number, height: number): Size =>
  makePair(width, height);

const makeRectangle = (
  x: number,
  y: number,
  width: number,
  height: number
): Rectangle => [makePoint(x, y), makeSize(width, height)];

const getRectangleSize = (rectangle: Rectangle) => getTail(rectangle);

const getRectanglePerimeter = (size: Size) =>
  2 * (getHead(size) + getTail(size));

const getRectangleSquare = (size: Size) => getHead(size) * getTail(size);

const printRectangleMeasures = (rectangle: Rectangle) =>
  console.log(
    `
    perimeter: ${getRectanglePerimeter(getRectangleSize(rectangle))} \n
    square: ${getRectangleSquare(getRectangleSize(rectangle))}
    `
  );

printRectangleMeasures(makeRectangle(3, 5, 10, 29));
