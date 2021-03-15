const makePair = <T>(a: T, b: T): [T, T] => [a, b];

const getHead = <T>(pair: [T, T]) => pair[0];

const getTail = <T>(pair: [T, T]) => pair[1];

type Point = [number, number];

const makeSegment = (start: Point, end: Point) => makePair(start, end);
const getStartSegment = (segment: [Point, Point]) => getHead(segment);
const getEndSegment = (segment: [Point, Point]) => getTail(segment);

const makePoint = (x: number, y: number): Point => makePair(x, y);
const getPointX = (point: Point) => getHead(point);
const getPointY = (point: Point) => getTail(point);

const getMiddleSegment = (segment: [Point, Point]): Point => {
  let x = 0;
  let y = 0;

  const startPointX = getPointX(getStartSegment(segment));
  const startPointY = getPointY(getStartSegment(segment));
  const endPointX = getPointX(getEndSegment(segment));
  const endPointY = getPointY(getEndSegment(segment));
  if (startPointX > endPointX) {
    x = startPointX - endPointX;
  } else {
    x = endPointX - startPointX;
  }

  if (startPointY > endPointY) {
    y = startPointY - endPointY;
  } else {
    y = endPointY - startPointY;
  }

  return makePoint(x, y);
};

const printPoint = (point: Point) =>
  console.log(`x: ${getPointX(point)}, y: ${getPointY(point)}`);

const segment = makeSegment(makePoint(123, 2345), makePoint(2345, 546));

printPoint(getMiddleSegment(segment));
