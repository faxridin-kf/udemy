enum Direction {
  up = 1,
  down,
  left,
  right,
}
enum DirectionWithString {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
enum Decision {
  one = 1,
  two = "two",
}

function calcEnum() {
  return 284;
}
enum Decision2 {
  one = 1,
  two = calcEnum(), //only number
}

function runEnum(obj: { up: string }) {}
runEnum(DirectionWithString);

enum Test {
  A,
}
let testOne = Test.A;
let nameA = Test[testOne];

enum Dise {
  one = 1,
  two,
  three,
}
function ruDise(dise: Dise) {
  switch (dise) {
    case Dise.one:
      return console.log("один");
    case Dise.two:
      return console.log("два");
    case Dise.three:
      return console.log("три");
    default:
      const a: never = dise;
  }
}
