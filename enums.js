var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
var DirectionWithString;
(function (DirectionWithString) {
    DirectionWithString["up"] = "up";
    DirectionWithString["down"] = "down";
    DirectionWithString["left"] = "left";
    DirectionWithString["right"] = "right";
})(DirectionWithString || (DirectionWithString = {}));
var Decision;
(function (Decision) {
    Decision[Decision["one"] = 1] = "one";
    Decision["two"] = "two";
})(Decision || (Decision = {}));
function calcEnum() {
    return 284;
}
var Decision2;
(function (Decision2) {
    Decision2[Decision2["one"] = 1] = "one";
    Decision2[Decision2["two"] = calcEnum()] = "two";
})(Decision2 || (Decision2 = {}));
function runEnum(obj) { }
runEnum(DirectionWithString);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
var testOne = Test.A;
var nameA = Test[testOne];
var Dise;
(function (Dise) {
    Dise[Dise["one"] = 1] = "one";
    Dise[Dise["two"] = 2] = "two";
})(Dise || (Dise = {}));
function ruDise(dise) {
    switch (dise) {
        case Dise.one:
            return console.log("один");
        case Dise.two:
            return console.log("два");
    }
}
