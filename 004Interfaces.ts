type Point = {
  x: number;
  y: number;
};

function printCordinate(coord: Point): number {
  return coord.x + coord.y;
}

// interfaces

interface Ipoint {
  x: number;
  y: number;
}
// interface extend
interface secontPoint extends Ipoint {
  z: number;
}

function printCordinateWithInterface(coord: Ipoint): number {
  return coord.x + coord.y;
}

// add to interface

interface test {
  a: number;
}
interface test {
  b: string;
}

const c = (point: Ipoint) => {
  const d: secontPoint = point as secontPoint;
};
