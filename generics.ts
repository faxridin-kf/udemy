function logDate<T>(num: T): T {
  console.log(new Date());

  return num;
}

logDate<string>("logTime");

logDate<number>(2738);

function logDate2<T>(num: T): T {
  if (typeof num == "string") {
    num.toLocaleLowerCase();
  }
  console.log(new Date());

  return num;
}

interface Myinterface {
  func: <T>(a: T) => T;
}

interface TimeStamp {
  stamp: number;
}

function logTimeStemp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);

  return num;
}
