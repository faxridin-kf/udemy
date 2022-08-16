// let a: number = 4;
let string: string = "hello";
let boolean: boolean = false;
let arr: string[] = ["fd", "fds", "fdf"];
let arrWithNum: number[] = [32, 643, 643, 36576];
let any: any = "hfudksv";

// типизатция функции
function test(a: number): number | string {
  return "";
}

const sum = (a: number): number => {
  return a * 2;
};

// типизация массива
arr = arr.map((a: string) => a.toLocaleUpperCase());
// типизация объекта
let obj: { lat: number; lwt?: number } = {
  lat: 2353,
  lwt: 46378,
};
const getCordinate = (obj: number) => {
  return console.log(obj);
};
getCordinate(obj.lat);

// юнион типы
function getPring(id: number | string) {
  if (typeof id === "number") console.log(id.toString());
  else if (typeof id === "string") {
    console.log(id.toLocaleUpperCase);
  }
}

let a: number[] = [321, 4321, 123, 4321];
function getAllSum(a: number | number[]) {
  if (Array.isArray(a)) {
    return console.log(a.map((a) => a + a));
  } else {
    console.log(a);
  }
}

// функциия ни чего не вернет
function test2(b: string): void {
  return;
}
